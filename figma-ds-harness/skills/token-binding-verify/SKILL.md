---
name: token-binding-verify
description: >-
  Shared enforcement core. Bind EVERY visual value to a token/variable and
  AUTO-VERIFY compliance after any write (code or Figma). Triggers after writing/
  editing UI/component code or generating Figma nodes, on "検証して", "verify tokens",
  "スクショで確認", "no hardcoded values?", or before committing. Works for both
  reproduce (React) and new-screen (Figma) entry points.
---

# token-binding-verify — トークン束縛 + 書込み後の自動検証（MUST）

すべての視覚値（色・余白・角丸・タイポ・枠・高さ・アイコン・影）を**トークン/変数に束縛**し、
**書き込み直後に自動で準拠チェック**する。直値（hex/px/rgb 等のオフスペック）は禁止。プロジェクト非依存。

## A. コード再現（reproduce / React）
1. **機械チェック**: プロジェクトのトークン検証コマンドを実行（hex/px/rgb の生値を検出）。0 件でなければ該当行をトークン参照に置換。トークンが無ければ Token Map ソースに追加して再生成。
2. **スクショ検証**: プレビュー起動 → 描画 → Figma `get_screenshot` と並べて差分（余白/行間/色/サイズ/配置）を列挙 → トークンを壊さず修正 → 視覚差分が無くなるまで反復。
3. **客観確認**: `getComputedStyle` で borderRadius / color / fontFamily 等が期待トークン値と一致するか確認。

## B. Figma 生成（new-screen / use_figma）
1. 生成した各ノードを `get_variable_defs` 等で読み直し、**色・余白・文字がすべて変数/スタイルに束縛**されているか確認（生 hex/数値が残っていないか）。
2. 配置要素が**マスターコンポーネントのインスタンス**であることを確認（detached/生シェイプが無いか）。
3. オフスペック（直値・非トークン）を検出したら、変数/スタイルに貼り直して再チェック。

## C. 合格条件
- A: 検証コマンド 0 件 + 主要 variant/size/state が一致（視覚差分ゼロ、最終差分を定量報告）。
- B: 全視覚値が変数/スタイル束縛 + 全要素がインスタンス（=DS準拠。B1 はピクセル一致ではなく準拠が合格基準）。
