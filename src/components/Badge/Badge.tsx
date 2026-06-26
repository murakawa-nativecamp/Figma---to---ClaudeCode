import type { HTMLAttributes } from "react";
import styles from "./Badge.module.css";

/** Badge — count/state indicator. Canon: badge.md · Figma 2156:5. */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  type?: "number" | "dot" | "new";
  count?: string;
  /** ring border for overlay on icons/tabs */
  bordered?: boolean;
}

export function Badge({ type = "number", count = "1", bordered = false, className, ...rest }: BadgeProps) {
  const classes = [styles.badge, styles[type], bordered && styles.bordered, className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {type === "number" && count}
      {type === "new" && "NEW"}
    </span>
  );
}

export default Badge;
