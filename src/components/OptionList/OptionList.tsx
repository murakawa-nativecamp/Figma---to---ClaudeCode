import { Children, type HTMLAttributes, type ReactNode } from "react";
import styles from "./OptionList.module.css";

/**
 * OptionList — stack of OptionRows (single-select group). Canon: option-list.md · Figma 2544:128.
 * Compose <OptionRow/> children; set one to selected.
 */
export interface OptionListProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function OptionList({ children, className, ...rest }: OptionListProps) {
  const classes = [styles.list, className].filter(Boolean).join(" ");
  return (
    <div role="radiogroup" className={classes} {...rest}>
      {Children.map(children, (child, i) => (
        <div className={styles.item} data-index={i}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default OptionList;
