---
description: "Pattern B1: generate a NEW design in Figma from a brief — using master-component instances with all values bound to variables/styles (DS-compliant, no off-spec). Writes only to a target file+page you share at runtime."
argument-hint: "[brief / requirements]"
---

ブリーフ: $ARGUMENTS

**パターン B1（新規生成）**。ブリーフから Figma に新規画面を生成する。合格基準はピクセル一致ではなく **DS 準拠**。
値のハードコード（オフスペック）と、マスターを使わない独自シェイプ生成は**禁止**。

## 手順
1. **構造化**: `reference-interpreter` でブリーフを構造化デザインブリーフに変換し、**ユーザーに確認**（GAP・曖昧点・インタラクション未確定を列挙）。合意前に書き込まない。
2. **preflight**: `preflight` で DS を確認（マスターコンポーネント / 変数 / スタイル、Token Map・Component Registry をロード）。MCP/権限/`use_figma` 可否（Dev/Full シート）も確認。
3. **書込み先の確定（必須・外向き操作）**: ⚠️ DS ライブラリ・ファイル（正典）には**書き込まない**。ユーザーが**その都度共有する作業用 Figma ファイルの対象ページのリンク**を受け取り、そこへ生成する。リンク未提供なら手を止めて要求。書き込み前に内容（配置するインスタンス一覧）を提示して**確認**を取る。
4. **生成**: `use_figma` 系で新規画面を構築。
   - 必ず**マスターコンポーネントのインスタンス**を配置（`component-rules`）。
   - 色・余白・文字・角丸などは**全て変数/スタイルに束縛**（直値禁止＝オフスペック禁止）。
5. **自動検証**: `token-binding-verify`（B モード）で、全ノードが変数/スタイル束縛かつインスタンスであることを再読込で確認。オフスペックがあれば貼り直して再チェック。
6. **出力**: 生成した Figma ノードの URL を提示し、「**人間がキャンバスでレビュー・調整**」を促す。

禁止: 直値（hex/px 等）/ マスター不使用の独自生成 / 正典ファイルへの書込み。
