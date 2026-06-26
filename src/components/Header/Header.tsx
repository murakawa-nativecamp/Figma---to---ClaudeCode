import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Header.module.css";

/**
 * Header — app top header (title band + optional action area).
 * Canon: header.md · Figma 1719:234. (NOT the doc template DocHeader 284:163.)
 * Left/right icons should be IconButtons with accessible names.
 */
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  pageTitle?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  actionArea?: boolean;
  slotHeaderLeft?: ReactNode;
  slotHeaderRight?: ReactNode;
  actionAreaSlot?: ReactNode;
}

export function Header({
  pageTitle = "タイトル",
  iconLeft = true,
  iconRight = true,
  actionArea = false,
  slotHeaderLeft,
  slotHeaderRight,
  actionAreaSlot,
  className,
  ...rest
}: HeaderProps) {
  const classes = [styles.header, className].filter(Boolean).join(" ");
  return (
    <header className={classes} {...rest}>
      <div className={styles.titleBand}>
        {iconLeft && <span className={styles.icon}>{slotHeaderLeft}</span>}
        <span className={styles.title}>{pageTitle}</span>
        {iconRight && <span className={styles.icon}>{slotHeaderRight}</span>}
      </div>
      {actionArea && <div className={styles.actionArea}>{actionAreaSlot}</div>}
    </header>
  );
}

export default Header;
