---
description: Print the design-system compliance rules this plugin enforces (instance-first, no zero-from-scratch components, token binding, library search, reproduction loop).
---

# デザインシステム遵守ルール（figma-ds-harness）

このプラグインが強制する必須ルール。プロジェクトの `CLAUDE.md` の具体（Figma file key・パス・コマンド）と併せて適用する。

1. **既存インスタンス優先 — ゼロからの新規生成は禁止**
   画面/UI はまず既存コンポーネントを使う。無い場合も発明せず、対応する Figma コンポーネントの契約から生成。カタログにも Figma にも無いものは手を止めて確認。

2. **すべての視覚値はトークン/Variables に束縛**
   色・余白・角丸・タイポ・枠・高さ・アイコン・影は必ずトークン参照経由。`#hex`/`px`/`rgb()` の直書き禁止。値が無ければトークンソースに追加して再生成。

3. **着手前に必ず接続済みライブラリを検索**
   実装前に `search_design_system` / `get_libraries` で接続ライブラリを検索し、`get_design_context`/`get_variable_defs` で実測。記憶や推測で値を埋めない。

4. **画面再現は「検索 → インスタンス利用 → トークン束縛 → スクショ検証」のループ**
   各画面/コンポーネントでこのループを回し、Figma と差分が出たら戻る。

関連スキル: `figma-preflight` / `component-conventions` / `token-binding-verify` / `reference-to-brief`。
前提: 公式 Figma Dev Mode MCP が有効であること（本プラグインは MCP を同梱しない）。
