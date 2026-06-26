import type { HTMLAttributes } from "react";
import styles from "./DropdownItem.module.css";

/**
 * DropdownItem — one option in a dropdown/filter panel. Canon: dropdown-filter.md · Figma 2141:14.
 * Compose in <DropdownFilter/>.
 */
export type DropdownItemState = "default" | "selected" | "disabled";

export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
  state?: DropdownItemState;
  label?: string;
}

export function DropdownItem({
  state = "default",
  label = "ラベル",
  className,
  ...rest
}: DropdownItemProps) {
  const isDisabled = state === "disabled";
  const classes = [styles.item, styles[state], className].filter(Boolean).join(" ");
  return (
    <button
      type="button"
      role="option"
      aria-selected={state === "selected"}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      className={classes}
      {...rest}
    >
      <span className={styles.label}>{label}</span>
      {state === "selected" && <span className={styles.check} aria-hidden="true" />}
    </button>
  );
}

export default DropdownItem;
