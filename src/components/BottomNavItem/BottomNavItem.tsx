import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Badge } from "../Badge/Badge";
import styles from "./BottomNavItem.module.css";

/**
 * BottomNavItem — one tab of the bottom nav (smallest unit).
 * Canon: bottom-navigation.md · Figma 2818:36. Do not use standalone; compose in <BottomNavigation/>.
 */
export type BottomNavItemState = "active" | "inactive";

export interface BottomNavItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  state?: BottomNavItemState;
  badge?: boolean;
  label?: string;
  icon?: ReactNode;
}

export function BottomNavItem({
  state = "active",
  badge = false,
  label = "ラベル",
  icon,
  className,
  ...rest
}: BottomNavItemProps) {
  const classes = [styles.item, styles[state], className].filter(Boolean).join(" ");
  return (
    <button className={classes} aria-current={state === "active" ? "page" : undefined} {...rest}>
      <span className={styles.iconWrap}>
        <span className={styles.icon}>{icon}</span>
        {badge && <span className={styles.badge}><Badge type="dot" bordered /></span>}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default BottomNavItem;
