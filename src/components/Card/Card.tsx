import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

/**
 * Card — generic content container.
 * Canon: docs/components card.md · Figma component-set 2524:2 (page [wip] Card).
 * vertical = media + title + body + actions; horizontal = thumb + title + value + chevron.
 * Flat list rows → CardRow; grouped surface → CardList.
 */
export type CardType = "vertical" | "horizontal";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  type?: CardType;
  /** Show media/image area (Figma: media boolean). */
  media?: boolean;
  /** Show actions area (Figma: actions boolean). */
  actions?: boolean;
  title?: string;
  body?: string;
  value?: string;
  unit?: string;
  caption?: string;
  /** Media slot. */
  mediaSlot?: ReactNode;
  /** Actions slot (e.g. Button / CardAction). */
  actionsSlot?: ReactNode;
}

export function Card({
  type = "vertical",
  media = true,
  actions = true,
  title = "日常英会話",
  body = "毎日の会話に役立つ実践的なレッスンです。",
  value = "8",
  unit = "レベル",
  caption = "(05月度)",
  mediaSlot,
  actionsSlot,
  className,
  ...rest
}: CardProps) {
  const classes = [styles.card, styles[type], className].filter(Boolean).join(" ");

  if (type === "horizontal") {
    return (
      <div className={classes} {...rest}>
        {media && <div className={styles.thumb}>{mediaSlot}</div>}
        <div className={styles.hbody}>
          <h3 className={styles.htitle}>{title}</h3>
          <div className={styles.valueRow}>
            <span className={styles.value}>{value}</span>
            <span className={styles.unit}>{unit}</span>
            <span className={styles.caption}>{caption}</span>
          </div>
        </div>
        <span className={styles.chevron} aria-hidden="true">
          ›
        </span>
      </div>
    );
  }

  return (
    <div className={classes} {...rest}>
      {media && <div className={styles.media}>{mediaSlot}</div>}
      <div className={styles.texts}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
      </div>
      {actions && <div className={styles.actions}>{actionsSlot}</div>}
    </div>
  );
}

export default Card;
