# Figma → ClaudeCode 再現ハーネス（NativeCamp APP）

既存 Figma デザインシステム（**Design System - APP**, file `DKl4vZ6OAtXYhuvMHbWkRZ`）を**正典**として、
以降の画面再現で **必ず既存コンポーネントとトークンを使う**ことを強制するための React ハーネス。

- 🔒 ルールの正本は [`CLAUDE.md`](CLAUDE.md)。Claude はコードを書く前にこれに従う。
- 🎨 トークンは [`tokens/tokens.json`](tokens/tokens.json) が唯一のソース → CSS変数とフラットJSONを生成。
- 🧩 コンポーネントは `src/components/<Name>/`（`.tsx` + token-bound `.module.css` + `.figma.tsx`）。
- 📚 カタログ・ノードマップ・Code Connect・プレビュー手順は [`docs/`](docs/)。

## クイックスタート
```bash
npm install
npm run tokens     # tokens.json → src/styles/tokens.css + tokens/design-tokens.json
npm run validate   # トークン構造 + ハードコード値(hex/px/rgb) ゼロを検証
npm run dev        # プレビュー http://localhost:5191/
```

## 原則（詳細は CLAUDE.md）
1. **既存インスタンス優先** — ゼロからのコンポーネント新規生成は禁止。
2. **全視覚値をトークンに束縛** — `#hex`/`px` 直書き禁止（`npm run validate` がゲート）。
3. **着手前に接続ライブラリを検索**（`search_design_system`）。
4. **再現ループ**: 検索 → インスタンス利用 → トークン束縛 → スクショ検証。

## プラグイン（`figma-ds-harness`）
強制スキル（`figma-preflight` / `component-conventions` / `token-binding-verify` / `reference-to-brief`）と
再現コマンド（`/figma-ds-harness:reproduce-screen` ほか）は Claude Code プラグインとして同梱。
clone → `.claude/settings.json` を trust で導入が促される。手動: `/plugin marketplace add .` →
`/plugin install figma-ds-harness@nc-figma-ds`。詳細は [`figma-ds-harness/README.md`](figma-ds-harness/README.md)。
前提: 公式 Figma Dev Mode MCP が有効であること（プラグインは MCP 非同梱）。

## 実装ステータス
`built`: Button, CompactButton, IconButton, TextLink, Badge。
残り ~40 コンポーネントは契約あり・`scaffold`（[`docs/catalog.md`](docs/catalog.md)）。生成ループで `built` 化する。
