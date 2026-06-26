# Code Connect — Figma ↔ React マッピング

`/code-connect-components` 相当。Figma コンポーネントと React 実装を `*.figma.tsx` で結び、
Figma Dev Mode 上で「このコンポーネントのコードは `<Button/>`」と表示できるようにする。

## マッピング一覧
| Figma コンポーネント | node-id | React 実装 | Code Connect ファイル |
|---|---|---|---|
| Button | `973:521` | `src/components/Button/Button.tsx` | `Button/Button.figma.tsx` |
| Compact Button | `1375:2316` | `src/components/CompactButton/CompactButton.tsx` | `CompactButton/CompactButton.figma.tsx` |
| Icon Button | `987:339` | `src/components/IconButton/IconButton.tsx` | `IconButton/IconButton.figma.tsx` |
| Text Link | `990:227` | `src/components/TextLink/TextLink.tsx` | `TextLink/TextLink.figma.tsx` |
| Badge | `2156:5` | `src/components/Badge/Badge.tsx` | `Badge/Badge.figma.tsx` |

新規コンポーネントを `built` にしたら、ここに1行追加する。

## prop マッピング規約
- Figma の **Variant/Size/State**（enum）→ `figma.enum(...)` で React の文字列 union に対応付け。
- Figma の **IconLeft/IconRight**（boolean）→ `figma.boolean(..., { true: figma.instance(...), false: undefined })` で `ReactNode` スロットに対応。
- Figma の **Label**（text）→ `figma.string("Label")`。

## 公開（publish）
> ⚠️ Figma の共有ファイルへ書き込む**外向き操作**。Dev/Full シートの Figma トークンが必要。
> 実行はユーザー承認のうえで。`add_code_connect_map`(MCP) でファイル側を直接書き換えることはこのリポでは**しない**（誤った上書き防止）。

```bash
export FIGMA_ACCESS_TOKEN=<dev/full-seat token>
npm run connect:publish     # = figma connect publish（figma.config.json を使用）
```

検証のみ（ファイルを変更しない）:
```bash
npm run connect:check
```
