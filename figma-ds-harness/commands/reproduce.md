---
description: "Pattern A: pixel-reproduce a Figma frame in React using existing component instances + token-bound values, iterating on screenshot diff until visual parity. Confirms a structured brief before writing code."
argument-hint: "[Figma frame URL]"
---

Figma フレーム: $ARGUMENTS

**パターン A（ピクセル再現）**。Figma フレームを React で忠実に再現する。値のハードコードと独自コンポーネント生成は**禁止**。

## 手順
1. **構造化ブリーフ → 確認**: `reference-interpreter` で対象フレームを構造化デザインブリーフに変換し、**ユーザー確認を取る**。⚠️ 確認前にコードを書かない。
2. **preflight**: `preflight` で MCP/権限/ライブラリ/Token Map/Component Registry を確認。
3. **セクション単位で実装**（各セクション）:
   - `component-rules`: ライブラリ検索 → **既存 React コンポーネントのインスタンス**を使用（無い必須要素は契約から生成、独自発明はしない）。
   - 全ての視覚値を **Token Map のトークンに束縛**（直値禁止）。
   - `token-binding-verify`(A): 書込み後に自動で準拠検証（検証コマンド 0 件）。
4. **スクショ差分ループ**: ブラウザでレンダリング→スクショ → Figma 実レンダリング（`get_screenshot`）と**差分（余白/行間/色/サイズ/配置）を列挙** → **トークンを壊さず**修正 → 視覚差分が無くなるまで反復。最終差分を定量報告。
5. **インタラクション仕様の確認**（推測禁止）: hover / focus / 押下 / 遷移 / timing / easing / 状態 / エッジケースは Figma だけでは不足する。**不明点を列挙してユーザーに仕様確認してから**実装する。

禁止: 直値ハードコード / コンポーネントの勝手な新規生成 / 確認前のコード記述 / インタラクションの推測実装。
