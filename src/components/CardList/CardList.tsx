import type { HTMLAttributes, ReactNode } from "react";
import styles from "./CardList.module.css";

/**
 * CardList — a single surface grouping CardRow items.
 * Canon: docs/components card-list.md · Figma component-set 2530:215 (page [wip] Card).
 * Rows separated by divider.default.
 */
export type CardListCount = 1 | 2 | 3 | 4 | 5 | 6;

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of rows (Figma: count). Informational; rows come from children. */
  count?: CardListCount;
  /** CardRow children. */
  children?: ReactNode;
}

export function CardList({ count = 1, children, className, ...rest }: CardListProps) {
  return (
    <div className={[styles.list, className].filter(Boolean).join(" ")} data-count={count} {...rest}>
      {children}
    </div>
  );
}

export default CardList;
