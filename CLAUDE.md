# CLAUDE.md — Figma→Code 再現ハーネス（NativeCamp APP）

このリポジトリは **既存 Figma デザインシステムを正典**として、画面再現で必ず既存コンポーネントとトークンを使うことを強制するためのハーネスです。生成系コードを書く前に、本ファイルを最上位ルールとして従ってください。

- 正典 Figma: file `DKl4vZ6OAtXYhuvMHbWkRZ`（library **Design System - APP**）/ theme **dark** / font **Noto Sans JP**
- トークン唯一ソース: [`tokens/tokens.json`](tokens/tokens.json) → 生成物 [`src/styles/tokens.css`](src/styles/tokens.css)・[`tokens/design-tokens.json`](tokens/design-tokens.json)
- カタログ: [`docs/catalog.md`](docs/catalog.md) / ノードマップ: [`docs/figma-node-map.md`](docs/figma-node-map.md)

---

## 必須ルール（MUST）

### 1. 既存インスタンス優先 — コンポーネントのゼロからの新規生成は禁止
- 画面・UI を作るときは、**まず `src/components/` の既存 React コンポーネントを使う**。
- 既存に無い場合も、**勝手に新規コンポーネントを発明しない**。対応する Figma コンポーネント（[`docs/catalog.md`](docs/catalog.md) の `scaffold`）の**契約から生成**する（`scaffold → built` 手順に従う）。
- カタログにも Figma にも存在しないUIが必要になったら、**手を止めてユーザーに確認**する。one-off の独自スタイルを作らない。

### 2. すべての視覚値は Variables/トークンに束縛
- 色・余白・角丸・タイポ・ボーダー幅・影・アイコンサイズ・要素高さは、**必ず `var(--…)` 経由**で参照する。
- **ハードコード禁止**: `#xxxxxx`・`16px` 等の生値、`rgb()/rgba()/hsl()` リテラルを `src/components/**` に書かない。
- 値が tokens.json に無い場合は、**直書きせず** tokens.json に正しいトークンを追加 → `npm run tokens` で再生成してから参照する。
- 機械チェック: `npm run validate`（`scripts/validate-tokens.mjs`）が違反を検出して **CI/コミット前に失敗**させる。例外が必要な1行のみ末尾に `/* token-exempt */`。

### 3. 着手前に必ず接続済みライブラリを検索
- 実装に入る前に **必ず** Figma の接続ライブラリを検索する: `search_design_system`（query=コンポーネント名）/ `get_libraries`。
- 対象 node を `get_design_context` / `get_variable_defs` で確認し、**variant/state/トークン参照を実測**してから書く。記憶や推測で値を埋めない。
- 既に `.figma.tsx`（Code Connect）がある場合は、その対応を正とする。

### 4. 画面再現は「検索 → インスタンス利用 → トークン束縛 → スクショ検証」のループ
各画面・各コンポーネントで以下を回す:
1. **検索**: `search_design_system` で使うコンポーネント/トークンを特定。
2. **インスタンス利用**: `src/components/` の既存コンポーネントを組み合わせる（無ければ契約から生成）。
3. **トークン束縛**: `var(--…)` のみで視覚値を表現。`npm run validate` が通ること。
4. **スクショ検証**: `npm run dev`（preview）でレンダリングし、Figma スクショと差分を目視＋ `getComputedStyle` で値一致を確認。差があれば 1 に戻る。

---

## やってよいこと / いけないこと

| ✅ DO | ❌ DON'T |
|---|---|
| `src/components` の既存を import して画面を組む | 似たボタンを `<div>`+inline style で自作する |
| `var(--color-semantic-brand-primary)` | `background:#f1890e` / `#F1890E` |
| `var(--spacing-md)` / `var(--control-height-l)` | `gap:12px` / `height:48px` |
| tokens.json に追記 → `npm run tokens` | tokens.css を手編集（生成物） |
| `search_design_system` してから実装 | 記憶で variant 名や色を埋める |
| 契約に無い variant はユーザーに確認 | 契約外の state/variant を勝手に追加 |

## コマンド
```bash
npm run tokens     # tokens.json → tokens.css + design-tokens.json を再生成
npm run validate   # tokens 構造 + ハードコード値の機械チェック（CIゲート）
npm run dev        # Vite プレビュー（スクショ検証ループ用, port 5191）
npm run build      # validate → tokens → tsc → vite build
```

## ディレクトリ
```
tokens/tokens.json          唯一のトークンソース（Figma同期）
tokens/design-tokens.json   解決済みフラットJSON（生成物）
src/styles/tokens.css       CSS変数（生成物・手編集禁止）
src/components/<Name>/       <Name>.tsx / <Name>.module.css / <Name>.figma.tsx
scripts/gen-tokens.mjs       生成器   scripts/validate-tokens.mjs  検証
docs/catalog.md              トークン+コンポーネント一覧 + 生成ループ
figma-ds-harness/            強制スキル＋再現コマンドの Claude Code プラグイン（正典）
.claude-plugin/marketplace.json  本リポ自身のマーケットプレイス（self-ref）
.claude/settings.json        マーケットプレイス宣言 + enabledPlugins（trust で導入を促す）
```

## スキル / コマンド（プラグイン `figma-ds-harness` が提供）
強制スキル群は **プラグイン側を正典**とする（バレな `.claude/skills` は廃止し移設済み）。
clone して `.claude/settings.json` を trust すると導入が促される。手動なら:
`/plugin marketplace add .` → `/plugin install figma-ds-harness@nc-figma-ds`（詳細 [`figma-ds-harness/README.md`](figma-ds-harness/README.md)）。

- 共有スキル: **preflight**（起動時並列チェック＋Token Map/Component Registry ロード）/ **component-rules**（ライブラリ検索必須・既存インスタンス優先・新規生成禁止）/ **token-binding-verify**（全視覚値束縛＋書込み後自動検証）/ **reference-interpreter**（参照/ブリーフ→構造化ブリーフ）。
- コマンド（入口2つ）: `/figma-ds-harness:reproduce`（A: Figmaフレーム→React 再現）/ `/figma-ds-harness:new-screen`（B1: ブリーフ→Figma 新規生成・DS準拠）。
- スキルはプロジェクト非依存。本 `CLAUDE.md` が具体を供給する → Token Map=`tokens/design-tokens.json`、Component Registry=`docs/catalog.md`、file key `DKl4vZ6OAtXYhuvMHbWkRZ`、検証=`npm run validate`、preview=5191。

> 前提: 公式 Figma Dev Mode MCP が有効であること（プラグインは MCP を同梱しない）。困ったら `docs/catalog.md` の「生成ループ」に戻ること。
