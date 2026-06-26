import type { HTMLAttributes, ReactNode } from "react";
import styles from "./HistoryRow.module.css";

/**
 * HistoryRow — one row of a study/chat history list. Canon: history-list.md · Figma 2776:1322.
 * Trailing/body presentation switches by `type`. Compose in <HistoryList/>.
 */
export type HistoryRowType = "message" | "audio" | "memo" | "chatLog";

export interface HistoryRowProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  type?: HistoryRowType;
  name?: string;
  timestamp?: string;
  message?: string;
  showTimestamp?: boolean;
  showMessage?: boolean;
  showTrailing?: boolean;
  /** avatar slot (Avatar) */
  avatarSlot?: ReactNode;
  /** trailing slot (icon etc.) */
  trailingSlot?: ReactNode;
}

export function HistoryRow({
  type = "message",
  name = "Cris",
  timestamp = "2026/06/15 15:43",
  message,
  showTimestamp = true,
  showMessage = true,
  showTrailing = true,
  avatarSlot,
  trailingSlot,
  className,
  ...rest
}: HistoryRowProps) {
  const classes = [styles.row, styles[type], className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      <span className={styles.avatar}>{avatarSlot}</span>
      <div className={styles.content}>
        <div className={styles.head}>
          <span className={styles.name}>{name}</span>
          {showTimestamp && <span className={styles.timestamp}>{timestamp}</span>}
        </div>
        {showMessage && <span className={styles.message}>{message}</span>}
      </div>
      {showTrailing && <span className={styles.trailing}>{trailingSlot}</span>}
    </div>
  );
}

export default HistoryRow;
