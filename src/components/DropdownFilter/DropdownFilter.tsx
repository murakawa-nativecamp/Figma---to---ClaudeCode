import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./DropdownFilter.module.css";

/**
 * DropdownFilter — elevated panel listing DropdownItems. Canon: dropdown-filter.md · Figma 2142:37.
 * Compose <DropdownItem/> children. Selection/keyboard handling lives in the consumer.
 */
export interface DropdownFilterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function DropdownFilter({ children, className, ...rest }: DropdownFilterProps) {
  const classes = [styles.panel, className].filter(Boolean).join(" ");
  return (
    <div role="listbox" className={classes} {...rest}>
      {children}
    </div>
  );
}

export default DropdownFilter;
