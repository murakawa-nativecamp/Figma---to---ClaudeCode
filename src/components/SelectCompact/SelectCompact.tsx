import type { HTMLAttributes } from "react";
import styles from "./SelectCompact.module.css";

/**
 * SelectCompact — compact value-only select chip.
 * Canon: docs/components select.md (#select-compact) · Figma component-set 2178:55 (page ・Select).
 * State: default | disabled only.
 */
export type SelectCompactState = "default" | "disabled";

export interface SelectCompactProps extends HTMLAttributes<HTMLButtonElement> {
  state?: SelectCompactState;
  value?: string;
}

function Chevron() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SelectCompact({ state = "default", value = "選択してください", className, ...rest }: SelectCompactProps) {
  const isDisabled = state === "disabled";
  const classes = [styles.chip, styles[state], className].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      className={classes}
      disabled={isDisabled}
      aria-haspopup="listbox"
      {...rest}
    >
      <span className={styles.value}>{value}</span>
      <Chevron />
    </button>
  );
}

export default SelectCompact;
