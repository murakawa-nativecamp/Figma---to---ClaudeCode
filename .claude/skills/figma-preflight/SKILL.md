---
name: figma-preflight
description: >-
  Run BEFORE writing any UI/component code in this repo. Use when about to
  reproduce a screen, build/port a component, or implement a design from Figma —
  e.g. "この画面を作って", "implement the Input component", "Figmaのこのフレームを再現".
  Enforces: search the connected library first, confirm the canon node, never
  start from memory.
---

# figma-preflight — 着手前チェック（MUST）

UI/コンポーネントのコードを書き始める**前に**必ず実行する。記憶や推測で値を埋める前に止めるためのゲート。

## 手順
1. **正典の確認**: file `DKl4vZ6OAtXYhuvMHbWkRZ`（library "Design System - APP"）。`docs/catalog.md` で対象を探す。
2. **接続ライブラリ検索（必須）**:
   - `search_design_system({ query: "<コンポーネント名>", fileKey: "DKl4vZ6OAtXYhuvMHbWkRZ" })`
   - 必要に応じ `get_libraries({ fileKey })` で接続状況を確認。
3. **既存実装の確認**: `src/components/` に `built` があるか（`docs/catalog.md` のステータス）。
   - **ある** → それを import して使う（新規生成しない）。このスキルは完了。
   - **ない（scaffold）** → `component-conventions` スキルへ。
4. **実測の取得**: `get_design_context` / `get_variable_defs` / `get_metadata` で対象 node の variant/state/トークン参照を確認。URL から nodeId/fileKey を抽出。
5. **Code Connect 確認**: `get_code_connect_map({ nodeId, fileKey })` で既存マッピングがあれば従う。

## 中断条件
- カタログにも Figma にも対象が見つからない → 手を止めてユーザーに確認（勝手に発明しない）。
- ライブラリ検索をスキップして実装に入らない。
