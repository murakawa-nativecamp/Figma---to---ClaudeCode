---
name: component-rules
description: >-
  Shared enforcement core for choosing/using components. Use whenever picking or
  building a component for a screen (both reproduce and new-screen). Triggers on
  "コンポーネントを作って/移植して/使って", "build/port/use the <X> component", assembling a
  screen. Mandates connected-library search, instance-first reuse, and forbids
  inventing components from scratch.
---

# component-rules — ライブラリ検索必須 / 既存インスタンス優先 / 新規生成禁止（MUST）

`preflight` 通過後、コンポーネントを選ぶ・組む・作るときの規約。プロジェクト非依存。

## 鉄則
1. **ライブラリ検索を必須化**: コンポーネントを使う前に必ず `search_design_system`（接続ライブラリ）で実在を確認。記憶で variant 名や有無を決めない。
2. **既存インスタンス優先**:
   - コード再現（reproduce）: プロジェクトの**既存 React コンポーネントを import** して使う（Component Registry 参照）。
   - Figma 生成（new-screen）: **マスターコンポーネントのインスタンス**を配置する（生のシェイプを描かない）。
3. **新規生成は禁止（ゼロから発明しない）**:
   - 既存に無い必須コンポーネントは、対応する Figma コンポーネントの**契約から生成**（variant/state を `get_design_context` で実測）。
   - カタログにも Figma にも無い要素は、**手を止めてユーザーに確認**。one-off の独自実装/独自シェイプを作らない。
4. **契約に忠実**: 契約に無い variant/state を勝手に足さない。足したい場合は確認。
5. **アクセシビリティ**: アイコンのみ要素は `aria-label` 必須 等。

## 出力
- 各領域 → 使用コンポーネント（既存/インスタンス）の対応表。GAP（DSに無い要素）は明示してエスカレーション。
- 値は `component-rules` では決めない。視覚値は必ず `token-binding-verify`／Token Map のトークンに束縛する。
