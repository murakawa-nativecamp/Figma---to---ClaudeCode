---
name: token-binding-verify
description: >-
  Use to verify a component or screen uses ONLY design tokens (no hardcoded
  values) and visually matches Figma. Triggers after writing/editing any
  src/components/** or screen code, on "検証して", "verify tokens", "スクショで確認",
  "no hardcoded values?", or before committing UI. Runs the validator and the
  screenshot-comparison loop.
---

# token-binding-verify — トークン束縛 + 自動検証

実装後に、ハードコードが無いこと・Figma と一致することを検証する。

## A. ハードコード機械チェック
```bash
npm run tokens     # 念のためトークン再生成（tokens.json を変更した場合）
npm run validate   # 構造 + ハードコード(hex/px/rgb) を検出。0 でなければ失敗
```
- 失敗したら、検出行の生値を該当 `var(--…)` に置換。トークンが無ければ tokens.json に追加して再生成。
- 真に例外的な1行のみ末尾 `/* token-exempt */`（濫用しない）。

## B. スクリーンショット検証ループ
1. `npm run dev`（port 5191。既に別アプリが 5173 等を使っていても衝突しない）。
2. preview ツールで対象を表示し、Figma スクショと**並べて差分**を見る。
3. 値の一致は `getComputedStyle` で確認（推奨・客観的）:
   ```js
   const b = getComputedStyle(document.querySelector('button'));
   // 期待: borderRadius "9999px"(radius.full), backgroundColor rgb(241,137,14)(brand.primary)
   ```
4. 差があれば原因（誤ったトークン参照/欠落 variant）を直し、A から再実行。

## C. 合格条件
- `npm run validate` が 0 件で通る。
- 主要 variant/size/state が Gallery に出ており、computed 値が期待トークン値と一致。
- （任意）`npm run shots` で Playwright によるスクショ回帰（`docs/preview.md` 参照）。
