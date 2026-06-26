---
name: reference-to-brief
description: >-
  Use when the user provides a reference (screenshot, image, URL, or another
  app's screen) and wants it reproduced in this design system. Triggers on
  "この画面みたいに作って", "reproduce this reference", "参考に〜を作って", pasting a UI image.
  Converts the reference into a design brief expressed ONLY in this DS's
  vocabulary (existing components + tokens), surfacing gaps before any code.
---

# reference-to-brief — 参照 → デザインブリーフ変換

外部の参照（画像/URL/他アプリ画面）を、**本DSの語彙だけ**で表現したブリーフに変換する。生のピクセルを直写しせず、必ず既存コンポーネント＋トークンへ写像する。

## 手順
1. **分解**: 参照を領域に分ける（ヘッダー / リスト / CTA / モーダル …）。各領域の役割・階層・状態を言語化。
2. **コンポーネント写像**: 各領域を `docs/catalog.md` の既存コンポーネントに対応付ける。
   - 例: 主CTA → `Button variant=primary`、補助 → `secondary`、リンク → `TextLink`、件数表示 → `Badge`。
   - 対応が無い領域は **gap** として明記（勝手に近似で埋めない）。
3. **トークン写像**: 参照の色/余白/角丸/タイポを、最も近い **semantic トークン**に対応付ける（生 hex を持ち込まない）。dark テーマ前提・Noto Sans JP。
4. **ブリーフ出力**（コード前に提示）:
   ```
   画面: <名前>
   - 領域A: <Component variant=… size=…> / tokens: …
   - 領域B: …
   - GAP: <DSに無い要素>（要確認 or scaffoldから生成）
   ```
5. **確認**: GAP と曖昧点をユーザーに確認 → 合意後に実装ループ（`figma-preflight` → `component-conventions` → `token-binding-verify`）へ。

## 原則
- 参照の独自スタイルより **DSの一貫性を優先**。ピクセル完全一致より「正典コンポーネント＋トークンで再構成」。
- 参照にあってDSに無い表現は、発明せず gap として上げる。
