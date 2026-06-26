import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Tab.module.css";

/**
 * Tab — single tab (smallest unit). Canon: tabs.md · Figma 2106:650.
 * Compose with <TabBar/>. Selection logic lives in the consumer.
 */
export type TabType = "underline" | "segmented";
export type TabState = "active" | "inactive" | "disabled";

export interface TabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type"> {
  type?: TabType;
  state?: TabState;
  label?: string;
  children?: ReactNode;
}

export function Tab({
  type = "underline",
  state = "active",
  label = "テキスト",
  children,
  className,
  ...rest
}: TabProps) {
  const isDisabled = state === "disabled";
  const classes = [styles.tab, styles[type], styles[state], className].filter(Boolean).join(" ");
  return (
    <button
      role="tab"
      aria-selected={state === "active"}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      className={classes}
      {...rest}
    >
      <span className={styles.label}>{children ?? label}</span>
    </button>
  );
}

export default Tab;
