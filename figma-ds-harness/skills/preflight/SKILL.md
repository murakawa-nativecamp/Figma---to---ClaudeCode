---
name: preflight
description: >-
  Shared enforcement core. Run at the START of any design/UI task (both the
  reproduce and new-screen entry points use it). Triggers on "この画面を作って",
  "reproduce this Figma frame", "ブリーフから新規画面", "implement/port a component",
  or before any code/Figma write. Runs parallel startup checks (MCP / permissions
  / connected library / token map / component registry) and loads the Token Map
  and Component Registry before work begins.
---

# preflight — 起動時並列チェック + マップ読込（MUST）

設計/UI 作業（reproduce / new-screen の両入口）の**最初**に必ず走らせるゲート。記憶や推測で進む前に止める。
プロジェクト非依存。具体の Figma file key・トークンソース・カタログ・コマンドは、プロジェクトの `CLAUDE.md` から取得する。

## 並列で確認する5点（揃うまで実装/書き込みに入らない）
1. **MCP**: 公式 Figma Dev Mode MCP が有効か（本プラグインは MCP 非同梱）。`whoami` で接続/ユーザーを確認。
2. **権限/シート**: 対象 Figma file へのアクセス、必要なら Dev/Full シート（Code Connect 取得・`use_figma` 書込みは seat 依存）。
3. **接続ライブラリ**: `get_libraries({ fileKey })` ＋ `search_design_system({ query, fileKey })` で DS ライブラリが接続済みか。
4. **Token Map のロード**: プロジェクトの解決済みトークン（例 `tokens/design-tokens.json`）と変数命名規則を読み込む。以降の値はすべてここから引く。
5. **Component Registry のロード**: プロジェクトのコンポーネントカタログ（例 `docs/catalog.md`）と Figma マスターコンポーネントの node-id 対応を読み込む。

## 出力
- 5点の結果サマリ（OK/NG）と、ロードした Token Map / Component Registry の要約。
- NG（MCP未接続・権限不足・ライブラリ未接続）があれば**手を止めて案内**。揃ってから次へ。

## 次へ
- 参照/ブリーフの解釈 → `reference-interpreter`。
- 実装/インスタンス選定 → `component-rules`。
- 書込み後の検証 → `token-binding-verify`。
