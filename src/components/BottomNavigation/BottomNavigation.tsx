import type { HTMLAttributes, ReactNode } from "react";
import { BottomNavItem } from "../BottomNavItem/BottomNavItem";
import styles from "./BottomNavigation.module.css";

/**
 * BottomNavigation — bottom global nav bar. Canon: bottom-navigation.md · Figma 2819:253.
 * Composes <BottomNavItem/> (count derives from items length).
 */
export type BottomNavigationType = "global" | "feature";

export interface BottomNavItemSpec {
  label: string;
  icon?: ReactNode;
  badge?: boolean;
}

export interface BottomNavigationProps extends HTMLAttributes<HTMLElement> {
  type?: BottomNavigationType;
  items?: BottomNavItemSpec[];
  activeIndex?: number;
  onItemSelect?: (index: number) => void;
}

export function BottomNavigation({
  type = "global",
  items = [{ label: "ラベル" }, { label: "ラベル" }, { label: "ラベル" }],
  activeIndex = 0,
  onItemSelect,
  className,
  ...rest
}: BottomNavigationProps) {
  const classes = [styles.bar, styles[type], className].filter(Boolean).join(" ");
  return (
    <nav className={classes} {...rest}>
      {items.map((item, i) => (
        <BottomNavItem
          key={i}
          state={i === activeIndex ? "active" : "inactive"}
          badge={item.badge}
          label={item.label}
          icon={item.icon}
          onClick={() => onItemSelect?.(i)}
        />
      ))}
    </nav>
  );
}

export default BottomNavigation;
