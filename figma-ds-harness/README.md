# figma-ds-harness (Claude Code plugin)

Figma デザインシステムを**正典**として、画面再現で必ず既存コンポーネント＋トークンを使うことを
強制する Claude Code プラグイン。**方法論（スキル＋コマンド＋遵守ルール）だけ**を再利用可能な形で同梱し、
プロジェクト固有のもの（コンポーネント実装、Code Connect `.figma.tsx`、実 Figma file key を含む `CLAUDE.md`）は
**各プロジェクト側に残す**。

## 同梱物
- **skills/**（共有の強制コア・自動トリガ。両入口が使う）:
  - `preflight` — 起動時に MCP/権限/ライブラリ/トークン/コンポーネントを並列チェックし、Token Map と Component Registry をロード。
  - `component-rules` — ライブラリ検索を必須化、既存インスタンス優先、ゼロからの新規生成を禁止。
  - `token-binding-verify` — 全視覚値をトークン/変数に束縛し、書込み後（コード/Figma 双方）に準拠を自動検証。
  - `reference-interpreter` — 参照やブリーフを構造化デザインブリーフに変換。
- **commands/**（入口2つ）:
  - `/figma-ds-harness:reproduce` — パターンA: Figma フレーム → React ピクセル再現。
  - `/figma-ds-harness:new-screen` — パターンB1: ブリーフ → Figma 新規生成（DS準拠）。

> プロジェクト非依存。具体の Figma file key / コンポーネントカタログ(Component Registry) / トークン(Token Map) /
> 検証コマンド / プレビュー手順は、各プロジェクトの `CLAUDE.md` から取得する設計。

## 前提
1. **リポジトリ + Figma ファイルのアクセス権**: 対象 Figma デザインシステムを閲覧でき、プロジェクト `CLAUDE.md` に file key 等が記載されていること。
2. **公式 Figma Dev Mode MCP が有効**: 本プラグインは **MCP を同梱しない**（`.mcp.json` なし）。重複を避けるため、Figma 公式の Dev Mode MCP を各自で有効化しておくこと（Figma デスクトップ → Dev Mode → MCP server を有効化、または `claude mcp add`）。`search_design_system` / `get_variable_defs` / `get_design_context` / `get_screenshot` 等がこの公式 MCP 由来。
   - ※ Code Connect の取得/公開は Figma の Dev/Full シート（Org/Enterprise）依存。シートが無い場合は該当ステップを省略。

## インストール
```text
# 1) マーケットプレイスを追加（このリポジトリ自身がマーケットプレイス）
/plugin marketplace add murakawa-nativecamp/Figma---to---ClaudeCode
#   （ローカルのクローンからは: /plugin marketplace add .）

# 2) プラグインをインストール
/plugin install figma-ds-harness@nc-figma-ds
```
プロジェクトを clone して `.claude/settings.json` を trust すると、本プラグインの導入が自動で促される
（`extraKnownMarketplaces` + `enabledPlugins` 宣言済み）。

### ローカル開発（インストールせず読み込み）
```bash
claude --plugin-dir ./figma-ds-harness
```

## 2パターンの使い分け
ターゲットは **React**（SwiftUI 化は開発者が別途行う）。

### A. 再現 `/figma-ds-harness:reproduce <Figma frame URL>`
既存 Figma フレームを React でピクセル再現。**合格基準＝視覚差分ゼロ**。
1. 構造化ブリーフを提示し**確認**（確認前にコードを書かない）→ 2. セクション単位で**既存インスタンス＋トークン束縛**
→ 3. ブラウザ描画とFigma実レンダリングの**スクショ差分**を反復解消 → 4. インタラクション（hover/focus/押下/遷移/timing/easing/状態/エッジ）は**不明点を確認してから**実装（推測禁止）。

### B1. 新規生成 `/figma-ds-harness:new-screen <brief>`
ブリーフから Figma に新規画面を生成。**合格基準＝DS準拠**（ピクセル一致ではない）。
1. 構造化＆**確認** → 2. `preflight` で DS 確認 → 3. **ユーザーがその都度共有する作業用ファイルのページのリンク**へ `use_figma` で生成（マスターの**インスタンス**＋色/余白/文字を**変数/スタイル束縛**）→ 4. 自動準拠検証 → 5. 生成ノードの URL を出力し**人間のキャンバスレビュー**を促す。
> ⚠️ 正典 DS ファイル（ライブラリ）には書き込まない。書込み先は毎回ユーザー共有リンク。`use_figma` は Dev/Full シート＋デスクトップ Figma が前提。

共有スキル（preflight / component-rules / token-binding-verify / reference-interpreter）は両入口が使い、作業内容に応じて自動起動する。

## 使い方（使用例）
そのままコピペして使えるプロンプト例。基本の流れは **B1 で Figma に起こす → 人がキャンバスで整える → A でコード化** 。ターゲットは **React**（SwiftUI 移植は開発者が別途行う前提）。

### 新規画面を起こす（B1）
B1 の合格基準は **DS準拠**（マスターのインスタンス＋変数/スタイル束縛）。**ピクセル一致は対象外**で、生成後は人がFigmaで調整する前提。

```
/figma-ds-harness:new-screen
作りたい画面: [どんな画面か。目的・主要素・状態などを箇条書きで]
DSのコンポーネントと変数だけで組み、生成後にFigmaノードURLを出してください。
```

記入例:

```
/figma-ds-harness:new-screen
作りたい画面:
- 目的: 無料体験ユーザー向けのレッスン予約完了画面
- 主要素: 完了見出し、予約サマリーカード（講師名・日時・教材）、
          「カレンダーに追加」ボタン、「ホームに戻る」テキストリンク
- 状態: 通常 / 予約が複数ある場合のリスト表示
DSのコンポーネントと変数だけで組み、生成後にFigmaノードURLを出してください。
```

### 人がFigmaで整えたあと、コード化する（A）
A の合格基準は **視覚差分ゼロ**。ブラウザ描画と Figma 実レンダリングの**スクショ差分（余白/行間/色/サイズ/配置）を反復で詰める**。

```
/figma-ds-harness:reproduce
[整えたFigmaフレームのURL]
DS準拠でReactに再現し、スクショ差分ループで詰めてください。
```

記入例:

```
/figma-ds-harness:reproduce
https://www.figma.com/design/XXXXXXXX/App?node-id=1234-5678
DS準拠でReactに再現し、スクショ差分ループで詰めてください。
インタラクションで不明な点は実装前に質問してください。
```

## 禁止事項
- ❌ ゼロから独自コンポーネントを発明する（既存インスタンス/契約優先）。
- ❌ `#hex` / `px` / `rgb()` の直書き（すべてトークン参照）。
- ❌ 接続ライブラリ検索をスキップして記憶で実装する。
- ❌ 契約に無い variant/state を勝手に追加する（要確認）。

## ライセンス
MIT
