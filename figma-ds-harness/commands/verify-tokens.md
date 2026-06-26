---
description: Verify the current UI uses ONLY design tokens (no hardcoded hex/px/rgb) and visually matches Figma. Runs the project's token validator and the screenshot-comparison loop.
argument-hint: "[component/screen (optional)]"
---

検証対象: $ARGUMENTS（未指定なら直近の変更）

`token-binding-verify` スキルに従う:
1. **機械チェック**: プロジェクトのトークン検証コマンドを実行（hex/px/rgb の生値を検出）。0 件でなければ、検出行をトークン参照に置換して再実行。
2. **スクショ検証**: プレビューを起動し対象を描画 → Figma スクショ（`get_screenshot`）と差分確認 → computed style でトークン値一致を客観確認。
3. 最終差分（色は一致か / 幾何は ±何px か）を定量で報告。NG があれば原因と修正案を提示。
