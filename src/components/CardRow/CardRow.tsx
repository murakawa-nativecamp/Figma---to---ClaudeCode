import type { HTMLAttributes, ReactNode } from "react";
import styles from "./CardRow.module.css";

/**
 * CardRow — flat list row (no corner radius). Stack inside CardList.
 * Canon: docs/components card-row.md · Figma component-set 2529:49 (page [wip] Card).
 */
export type CardRowMedia = "thumbnail" | "avatar" | "empty";

export interface CardRowProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  media?: CardRowMedia;
  title?: string;
  subtitle?: string;
  caption?: string;
  /** Show trailing chevron (Figma: showChevron boolean). */
  showChevron?: boolean;
  /** Show empty-state sub line (Figma: showEmptySub boolean). */
  showEmptySub?: boolean;
  emptyText?: string;
  emptySub?: string;
  /** Media slot (thumbnail/avatar). */
  mediaSlot?: ReactNode;
}

export function CardRow({
  media = "thumbnail",
  title = "タイトルエリア",
  subtitle = "サブタイトルエリア",
  caption = "サブタイトルエリア",
  showChevron = true,
  showEmptySub = true,
  emptyText = "予約中のレッスンはありません",
  emptySub = "レッスンを予約してみよう！",
  mediaSlot,
  className,
  ...rest
}: CardRowProps) {
  const isEmpty = media === "empty";
  const classes = [styles.row, className].filter(Boolean).join(" ");

  if (isEmpty) {
    return (
      <div className={classes} {...rest}>
        <div className={styles.texts}>
          <span className={styles.title}>{emptyText}</span>
          {showEmptySub && <span className={styles.subtitle}>{emptySub}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className={classes} {...rest}>
      <span className={[styles.media, styles[media]].join(" ")}>{mediaSlot}</span>
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
        <span className={styles.caption}>{caption}</span>
      </div>
      {showChevron && (
        <span className={styles.chevron} aria-hidden="true">
          ›
        </span>
      )}
    </div>
  );
}

export default CardRow;
