import { Children, type HTMLAttributes, type ReactNode } from "react";
import styles from "./HistoryList.module.css";

/**
 * HistoryList — stack of HistoryRows with dividers. Canon: history-list.md · Figma 2783:1576.
 * Compose <HistoryRow/> children.
 */
export interface HistoryListProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function HistoryList({ children, className, ...rest }: HistoryListProps) {
  const classes = [styles.list, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      {Children.map(children, (child, i) => (
        <div className={styles.item} data-index={i}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
