---
name: component-conventions
description: >-
  Use when creating or porting a single component from a Figma design-system
  canon (a component not yet implemented in the project), or when editing an
  existing component's API/styles. Triggers on "コンポーネントを作って/移植して", "build/port
  the <X> component", "scaffold <X>". Enforces contract-faithful props/states and
  token-only styling. For assembling components into a screen, this is the
  per-component step of the reproduction loop.
---

# component-conventions — コンポーネント生成規約

`figma-preflight` を通過した前提で、1コンポーネントを正典に忠実に実装する。プロジェクト非依存の規約。
具体のディレクトリ構成・トークン参照方法・検証コマンドは、プロジェクトの `CLAUDE.md` に従うこと。

## 契約忠実（MUST）
- Props は契約（Figma の variant/size/state/boolean/text、または `get_design_context` の実測）をそのまま型に反映。
- 契約に**無い** variant/state を勝手に足さない。足したくなったら手を止めて確認。
- アイコン等のスロットは、Figma の boolean トグル → 実装側のスロット（例 `ReactNode`）にマップ。
- アイコンのみの要素は `aria-label` 必須等、アクセシビリティを担保。

## トークン束縛（MUST）
- 色・余白・角丸・タイポ・枠・要素高さ・アイコンサイズ・影は、プロジェクトのトークン参照（例: CSS変数 `var(--…)` / テーマオブジェクト）**経由のみ**。生の hex / px を書かない。
- 値がトークンに無ければ、直書きせず**トークンソースに追加 → 再生成**してから参照する（プロジェクトの生成コマンド）。

## ファイル構成
- プロジェクトの既存パターン（参照実装）に倣う。1コンポーネント = 1ディレクトリ（実装 + スタイル + Code Connect マッピング）を推奨。
- バレル/インデックスに export を追加。

## 仕上げ
1. プロジェクトのプレビュー/ギャラリーに variant/size/state を網羅表示。
2. プロジェクトのトークン検証コマンドを実行（ハードコード 0 を確認）。
3. `token-binding-verify` スキルでスクショ検証。
4. コンポーネントカタログの実装ステータスを更新。
