---
description: Reproduce a screen or component from a Figma reference using ONLY the project's existing design-system components and tokens. Runs the full brief→preflight→implement→verify loop.
argument-hint: "[Figma URL | reference image/desc]"
---

参照: $ARGUMENTS

この参照を、**プロジェクトの既存デザインシステム（既存コンポーネント＋トークン）だけ**で再現する。
ゼロから独自コンポーネントを作らない。すべての視覚値はトークンに束縛する。

手順（各ステップで対応スキルに従う）:
1. **reference-to-brief**: 参照を領域分解し、各領域を既存コンポーネント＋semantic トークンへ写像。DSに無い要素は GAP として列挙し、ユーザーに確認する（勝手に近似で埋めない）。
2. **figma-preflight**: 着手前に接続ライブラリを `search_design_system` で検索し、正典 node と既存実装を確認（プロジェクト `CLAUDE.md` のカタログ参照）。記憶で値を埋めない。
3. **実装**: 既存コンポーネントを import して合成。未実装の必須コンポーネントは `component-conventions` に従い契約から生成（契約外の variant/state を足さない）。
4. **token-binding-verify**: プロジェクトのトークン検証コマンド（ハードコード0）→ プレビュー描画 → Figma スクショと差分確認 → 必要なら反復。最終差分を定量報告。
5. **インタラクション仕様**: 契約由来の挙動と仮定を切り分けて提示し、要確認点を上げる。

着手前に不明点が2〜3あれば質問してから進める。
