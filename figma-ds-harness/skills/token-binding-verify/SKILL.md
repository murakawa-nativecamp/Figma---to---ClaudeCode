---
name: token-binding-verify
description: >-
  Use to verify a component or screen uses ONLY design tokens (no hardcoded
  values) and visually matches Figma. Triggers after writing/editing UI/component
  code, on "検証して", "verify tokens", "スクショで確認", "no hardcoded values?", or before
  committing UI. Runs the project's token validator and the screenshot-comparison
  loop.
---

# token-binding-verify — トークン束縛 + 自動検証

実装後に、ハードコードが無いこと・Figma と一致することを検証する。プロジェクト非依存の手順。
具体の検証コマンド・プレビュー起動方法は、プロジェクトの `CLAUDE.md` を参照。

## A. ハードコード機械チェック
- プロジェクトのトークン検証コマンドを実行（hex / px / rgb 等の生値を検出するもの）。
- 失敗したら、検出行の生値を該当トークン参照に置換。トークンが無ければトークンソースに追加して再生成。
- 真に例外的な1行のみ、プロジェクト規約の除外マーカーを付す（濫用しない）。

## B. スクリーンショット検証ループ
1. プロジェクトのプレビュー（dev サーバ等）を起動。
2. 対象を表示し、Figma スクショ（`get_screenshot`）と**並べて差分**を見る。
3. 値の一致は computed style で客観確認（例 borderRadius / backgroundColor / fontFamily がトークン値と一致するか）。
4. 差があれば原因（誤ったトークン参照 / 欠落 variant）を直し、A から再実行。

## C. 合格条件
- トークン検証が 0 件で通る。
- 主要 variant/size/state がプレビューに出ており、computed 値が期待トークン値と一致。
- 最終差分（幾何/色）を定量で報告する（例: ±数px / 色は一致）。
