import { Button, CompactButton, IconButton, TextLink, Badge } from "./components";
import type { ButtonVariant, ButtonSize, ButtonState } from "./components/Button/Button";
import s from "./Gallery.module.css";

const variants: ButtonVariant[] = ["primary", "gradient", "secondary", "tertiary", "ghost", "danger", "reservation"];
const sizes: ButtonSize[] = ["xl", "l", "m", "s"];
const states: ButtonState[] = ["default", "loading", "disabled"];

// Minimal inline-SVG icon so the gallery has no external asset dependency.
const Star = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z" />
  </svg>
);

export function Gallery() {
  return (
    <div className={s.page}>
      <h1 className={s.h1}>NativeCamp APP — React DS harness</h1>
      <p className={s.note}>
        canon: tokens/tokens.json (Figma DKl4vZ6OAtXYhuvMHbWkRZ) · すべての視覚値は tokens.css の CSS 変数経由 · theme: dark
      </p>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>Button (973:521)</h2>
        {variants.map((v) => (
          <div key={v}>
            <div className={s.variantTag}>{v}</div>
            {sizes.map((size) => (
              <div key={size} className={s.row}>
                <span className={s.sizeTag}>{size}</span>
                {states.map((state) => (
                  <div key={state} className={s.stateCol}>
                    <Button variant={v} size={size} state={state} iconLeft={<Star />} label="Button" />
                    <span className={s.stateLabel}>{state}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>CompactButton (1375:2316)</h2>
        <div className={s.row}>
          <CompactButton variant="primary" size="l" label="保存" />
          <CompactButton variant="secondary" size="l" label="キャンセル" />
          <CompactButton variant="tertiary" size="m" label="5分" />
          <CompactButton variant="ghost" size="m" label="後で決める" />
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>IconButton (987:339)</h2>
        <div className={s.row}>
          <IconButton variant="primary" size="l" shape="circle" icon={<Star />} aria-label="お気に入り" />
          <IconButton variant="secondary" size="l" shape="circle" icon={<Star />} aria-label="お気に入り" />
          <IconButton variant="tertiary" size="m" shape="square" icon={<Star />} aria-label="お気に入り" />
          <IconButton variant="danger" size="m" shape="square" icon={<Star />} aria-label="削除" />
          <IconButton variant="ghost" size="s" shape="circle" icon={<Star />} aria-label="メニュー" state="disabled" />
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>TextLink (990:227) · Badge (2156:5)</h2>
        <div className={s.row}>
          <TextLink size="l" label="もっと見る" iconRight={<Star />} />
          <TextLink size="m" label="規約を読む" />
          <TextLink size="s" label="無効リンク" state="disabled" />
          <Badge type="number" count="3" />
          <Badge type="new" />
          <Badge type="dot" />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
