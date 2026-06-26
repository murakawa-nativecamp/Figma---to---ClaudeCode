# figma-ds-harness (Claude Code plugin)

Figma デザインシステムを**正典**として、画面再現で必ず既存コンポーネント＋トークンを使うことを
強制する Claude Code プラグイン。**方法論（スキル＋コマンド＋遵守ルール）だけ**を再利用可能な形で同梱し、
プロジェクト固有のもの（コンポーネント実装、Code Connect `.figma.tsx`、実 Figma file key を含む `CLAUDE.md`）は
**各プロジェクト側に残す**。

## 同梱物
- **skills/**（自動トリガ）: `figma-preflight` / `component-conventions` / `token-binding-verify` / `reference-to-brief`
- **commands/**: `/figma-ds-harness:reproduce-screen` / `:ds-preflight` / `:verify-tokens` / `:ds-rules`
- **遵守ルール**: `/figma-ds-harness:ds-rules` で出力（instance優先・新規生成禁止・トークン束縛・ライブラリ検索・検証ループ）

> プロジェクト非依存。具体の Figma file key / コンポーネントカタログ / 検証コマンド / プレビュー手順は、
> 各プロジェクトの `CLAUDE.md` から取得する設計。

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

## 使い方
- `/figma-ds-harness:reproduce-screen <Figma URL or 参照>` … 参照を既存DSで再現（brief→preflight→実装→検証ループ）。
- `/figma-ds-harness:ds-preflight <component>` … 着手前チェック（ライブラリ検索・正典確認）。
- `/figma-ds-harness:verify-tokens` … トークン束縛＋スクショ差分検証。
- `/figma-ds-harness:ds-rules` … 遵守ルールを表示。
- スキルは作業内容に応じて自動起動（明示コマンドは入口）。

## 禁止事項
- ❌ ゼロから独自コンポーネントを発明する（既存インスタンス/契約優先）。
- ❌ `#hex` / `px` / `rgb()` の直書き（すべてトークン参照）。
- ❌ 接続ライブラリ検索をスキップして記憶で実装する。
- ❌ 契約に無い variant/state を勝手に追加する（要確認）。

## ライセンス
MIT
