import type { HTMLAttributes } from "react";
import { Tab, type TabType } from "../Tab/Tab";
import styles from "./TabBar.module.css";

/**
 * TabBar — row of Tabs. Canon: tabs.md · Figma 2116:68.
 * Composes <Tab/>. Provide labels (count derives from length) and the active index.
 */
export interface TabBarProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  type?: TabType;
  labels?: string[];
  /** index of the active tab */
  activeIndex?: number;
  onTabSelect?: (index: number) => void;
}

export function TabBar({
  type = "underline",
  labels = ["テキスト", "テキスト"],
  activeIndex = 0,
  onTabSelect,
  className,
  ...rest
}: TabBarProps) {
  const classes = [styles.bar, styles[type], className].filter(Boolean).join(" ");
  return (
    <div role="tablist" className={classes} {...rest}>
      {labels.map((label, i) => (
        <Tab
          key={i}
          type={type}
          state={i === activeIndex ? "active" : "inactive"}
          label={label}
          onClick={() => onTabSelect?.(i)}
        />
      ))}
    </div>
  );
}

export default TabBar;
