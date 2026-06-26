---
name: figma-preflight
description: >-
  Run BEFORE writing any UI/component code in a project that uses a Figma design
  system as canon. Use when about to reproduce a screen, build/port a component,
  or implement a design from Figma — e.g. "この画面を作って", "implement the Input
  component", "Figmaのこのフレームを再現". Enforces: search the connected library first,
  confirm the canon node, never start from memory.
---

# figma-preflight — 着手前チェック（MUST）

UI/コンポーネントのコードを書き始める**前に**必ず実行するゲート。記憶や推測で値を埋める前に止める。
このスキルは**プロジェクト非依存**。具体の Figma file key・コンポーネント一覧・コマンドは、その
プロジェクトの `CLAUDE.md`（および design-system カタログ）から取得すること。

## 手順
1. **正典の確認**: プロジェクトの `CLAUDE.md` で「正典 Figma file / library 名 / コンポーネントカタログ」を確認する。対象コンポーネントがカタログにあるか探す。
2. **接続ライブラリ検索（必須）**:
   - `search_design_system({ query: "<コンポーネント名>", fileKey: "<プロジェクトの file key>" })`
   - 必要に応じ `get_libraries({ fileKey })` で接続状況を確認。
   - ⚠️ 公式 Figma MCP が有効である前提（本プラグインは MCP を同梱しない）。未接続なら手を止めて案内。
3. **既存実装の確認**: プロジェクトのコンポーネント実装ディレクトリに該当が既にあるか（カタログの実装ステータス）。
   - **ある** → それを import して使う（新規生成しない）。このスキルは完了。
   - **ない** → `component-conventions` スキルへ。
4. **実測の取得**: `get_design_context` / `get_variable_defs` / `get_metadata` で対象 node の variant/state/トークン参照を確認。URL から nodeId/fileKey を抽出。
5. **Code Connect 確認**: `get_code_connect_map({ nodeId, fileKey })` で既存マッピングがあれば従う（※ Code Connect は Dev/Full シート依存。不可なら省略可）。

## 中断条件
- カタログにも Figma にも対象が見つからない → 手を止めてユーザーに確認（勝手に発明しない）。
- ライブラリ検索をスキップして実装に入らない。
