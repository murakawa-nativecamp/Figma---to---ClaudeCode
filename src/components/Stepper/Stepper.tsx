import type { HTMLAttributes } from "react";
import styles from "./Stepper.module.css";

/**
 * Stepper — quantity increment/decrement (− / value / +).
 * Canon: docs/components stepper.md · Figma component-set 2295:18 (page ・Stepper).
 */
export type StepperState = "default" | "disabled";

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  state?: StepperState;
  value?: number | string;
  /** Disable just the − button (lower bound reached). */
  decrementDisabled?: boolean;
  /** Disable just the + button (upper bound reached). */
  incrementDisabled?: boolean;
  onDecrement?: () => void;
  onIncrement?: () => void;
}

export function Stepper({
  state = "default",
  value = 1,
  decrementDisabled = false,
  incrementDisabled = false,
  onDecrement,
  onIncrement,
  className,
  ...rest
}: StepperProps) {
  const allDisabled = state === "disabled";
  const classes = [styles.stepper, allDisabled && styles.disabled, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...rest}>
      <button
        type="button"
        className={styles.btn}
        aria-label="減らす"
        disabled={allDisabled || decrementDisabled}
        onClick={onDecrement}
      >
        <span className={styles.minus} aria-hidden="true" />
      </button>
      <span className={styles.value}>{value}</span>
      <button
        type="button"
        className={styles.btn}
        aria-label="増やす"
        disabled={allDisabled || incrementDisabled}
        onClick={onIncrement}
      >
        <svg className={styles.plus} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

export default Stepper;
