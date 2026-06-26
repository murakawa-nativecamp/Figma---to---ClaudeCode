import type { HTMLAttributes } from "react";
import styles from "./StatusBadge.module.css";

/**
 * StatusBadge — lesson-state badge (reservation / now / live).
 * Canon: docs/components status-badge.md · Figma component-set 2732:246 (page ・Badge).
 * Generic count/dot → Badge.
 */
export type StatusBadgeStatus = "reservation" | "now" | "live";

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: StatusBadgeStatus;
  label?: string;
}

export function StatusBadge({ status = "reservation", label = "テキスト", className, ...rest }: StatusBadgeProps) {
  const classes = [styles.badge, styles[status], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {label}
    </span>
  );
}

export default StatusBadge;
