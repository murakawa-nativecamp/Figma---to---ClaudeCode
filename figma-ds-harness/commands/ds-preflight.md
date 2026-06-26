---
description: Run the pre-implementation gate before building/porting a component — search the connected Figma library, confirm the canon node, check for an existing implementation.
argument-hint: "[component name]"
---

対象コンポーネント: $ARGUMENTS

`figma-preflight` スキルに従い、着手前チェックを実行する:
1. プロジェクト `CLAUDE.md` の正典 Figma file / library / カタログで対象を確認。
2. `search_design_system({ query: "$ARGUMENTS", fileKey: "<プロジェクトの file key>" })`（公式 Figma MCP 前提）。
3. 既存実装の有無を確認 → あれば「それを使う」と結論。無ければ `component-conventions` へ。
4. `get_design_context` / `get_variable_defs` で variant/state/トークンを実測。
5. Code Connect マッピングがあれば従う。

結果（正典 node / 既存実装の有無 / 次アクション）を簡潔に報告する。
