# Preview & スクショ検証

スクショ検証ループ（CLAUDE.md ルール4のステップ4）用の環境。

## 1. ローカルプレビュー（Vite）
```bash
npm run dev      # http://localhost:5191/  （port 5191 固定: 他アプリの 5173 等と衝突しない）
```
`src/Gallery.tsx` が built コンポーネントの variant/size/state を一覧表示する。
新規コンポーネントは Gallery にセクションを足して可視化する。

## 2. 検証（推奨: Claude Preview MCP）
- preview ツールでレンダリングを取得し、Figma スクショと並べて差分を見る。
- 値の客観チェックは `getComputedStyle`:
  ```js
  const b = getComputedStyle(document.querySelector('button'));
  b.borderRadius      // "9999px"  → radius.full
  b.backgroundColor   // "rgb(241, 137, 14)" → #f1890e brand.primary
  b.fontFamily        // "Noto Sans JP", …
  ```
- インストール不要・テキスト駆動なので、これを既定の検証手段とする。

## 3. スクショ回帰（任意・Playwright）
CI やオフライン回帰用。ブラウザの初回インストールが必要。
```bash
npx playwright install chromium     # 初回のみ
npm run dev &                       # サーバ起動
npm run shots                       # screenshots/ に出力（gallery-full.png ほか）
```
出力 `screenshots/*.png` は `.gitignore` 済み（リポを汚さない）。基準画像として残す場合は別管理。

## 注意
- フォント Noto Sans JP 未インストール環境では system-ui にフォールバックし、字形が Figma と僅かに異なる。色/余白/角丸/サイズの一致が検証の主対象。
- ブラウザ描画と iOS/SwiftUI 描画は厳密一致しない（本ハーネスは Web/React の正典）。
