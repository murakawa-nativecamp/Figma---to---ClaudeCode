---
name: component-conventions
description: >-
  Use when creating or porting a single React component from the design-system
  canon (a `scaffold` entry in docs/catalog.md), or when editing an existing
  component's API/styles. Triggers on "コンポーネントを作って/移植して", "build/port the
  <X> component", "scaffold <X>". Enforces contract-faithful props/states, file
  layout, and token-only styling. For assembling components into a screen, this
  is the per-component step of the reproduction loop.
---

# component-conventions — コンポーネント生成規約

`figma-preflight` を通過した前提で、1コンポーネントを正典に忠実に React 化する。

## ファイル構成（1コンポーネント = 1ディレクトリ）
```
src/components/<Name>/
  <Name>.tsx          React 実装（props は契約の variant/size/state/… に一致）
  <Name>.module.css   視覚値は var(--…) のみ（ハードコード禁止）
  <Name>.figma.tsx     Code Connect マッピング（Figma node ↔ React）
```
- バレル `src/components/index.ts` に export を追加。
- 参照実装は `src/components/Button/`（最も契約が厚い）。迷ったらこれに倣う。

## 契約忠実（MUST）
- Props は契約（上流 `components/<name>.md` または `get_design_context` の実測）の **variant / size / state / boolean / label** をそのまま型に反映。
- 契約に**無い** variant/state を勝手に足さない。足したくなったら手を止めて確認。
- アイコンは Figma の boolean トグル → React では `ReactNode` スロット（`iconLeft?: ReactNode` 等）にマップ。
- アイコンのみの要素は `aria-label` を必須にする等、アクセシビリティを担保。

## トークン束縛（MUST）
- 色=`--color-semantic-*`（原則 semantic。primitive 直参照は gradient 等のみ）、余白=`--spacing-*`、角丸=`--radius-*`、タイポ=`--type-<style>-*`、枠=`--border-width-*`、高さ=`--control-height-*`、アイコン=`--icon-size-*`、影=`--shadow-*`。
- 値が無ければ `tokens/tokens.json` に追加 → `npm run tokens` → 参照（tokens.css は手編集しない）。

## 仕上げ
1. `src/Gallery.tsx` に variant/size/state を網羅した表示を追加。
2. `npm run validate`（ハードコード 0 を確認）。
3. `token-binding-verify` スキルでスクショ検証。
4. `docs/catalog.md` のステータスを `scaffold → built` に更新。
