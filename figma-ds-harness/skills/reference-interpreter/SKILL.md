---
name: reference-interpreter
description: >-
  Shared enforcement core. Convert a reference (Figma frame URL, screenshot,
  image, or a text brief) into a STRUCTURED design brief expressed only in the
  project DS's vocabulary (existing components + tokens), surfacing gaps before
  any code/Figma write. Triggers on "この画面みたいに作って", "reproduce this frame",
  "ブリーフから作って", "参考に〜を作って", pasting a UI image. Used by both reproduce (A)
  and new-screen (B1).
---

# reference-interpreter — 参照/ブリーフ → 構造化デザインブリーフ

入力（Figma フレーム URL / スクショ / 画像 / テキストブリーフ）を、**プロジェクトDSの語彙だけ**で表した
構造化ブリーフに変換する。生ピクセルを直写しせず、既存コンポーネント＋トークンへ写像する。コード/Figma 書込みの**前**に必ず提示して確認を取る。

## 手順
1. **分解**: 領域に分ける（ヘッダー / リスト / CTA / モーダル …）。各領域の役割・階層・状態を言語化。
2. **コンポーネント写像**: 各領域を Component Registry の既存要素へ対応付け（例: 主CTA→primary ボタン、リンク→text link、件数→badge）。対応が無い領域は **GAP** として明記。
3. **トークン写像**: 色/余白/角丸/タイポを最も近い **semantic トークン**へ対応（生 hex を持ち込まない）。テーマ（dark/light）に従う。
4. **構造化ブリーフ出力**:
   ```
   画面: <名前> / theme: <…>
   - 領域A: <Component variant=… size=…> / tokens: <…>
   - 領域B: …
   - GAP: <DSに無い要素>（要確認 or 契約から生成）
   - インタラクション未確定: <hover/focus/押下/遷移/timing/easing/状態/エッジ>
   ```
5. **確認**: GAP・曖昧点・インタラクション未確定を列挙してユーザーに確認 → 合意後に実装へ。

## 原則
- A（reproduce）は Figma フレームを忠実に構造化（ピクセル再現の前段）。
- B1（new-screen）はテキストブリーフを DS 準拠の構造へ（新規生成の前段）。
- どちらも「参照の独自スタイル」より **DS の一貫性**を優先。無い表現は発明せず GAP として上げる。
