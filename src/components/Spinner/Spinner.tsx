import type { HTMLAttributes } from "react";
import styles from "./Spinner.module.css";

/**
 * Spinner — indeterminate loading indicator (circular). Determinate → Progress.
 * Canon: docs/components spinner.md · Figma component-set 2283:2 (page ・Loading).
 */
export type SpinnerSize = "l" | "m" | "s";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
}

export function Spinner({ size = "l", className, ...rest }: SpinnerProps) {
  const classes = [styles.spinner, styles[size], className].filter(Boolean).join(" ");
  return <span className={classes} role="status" aria-label="Loading" {...rest} />;
}

export default Spinner;
