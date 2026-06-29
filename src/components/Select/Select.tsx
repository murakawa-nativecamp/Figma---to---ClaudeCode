import { useId } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Select.module.css";

/**
 * Select — dropdown field, Input-shaped with chevron.
 * Canon: docs/components select.md · Figma component-set 2170:39 (page ・Select).
 */
export type SelectState = "default" | "filled" | "error" | "disabled" | "open";

export interface SelectProps extends HTMLAttributes<HTMLButtonElement> {
  state?: SelectState;
  label?: boolean;
  helper?: boolean;
  labelText?: string;
  value?: string;
  helperText?: string;
}

function Chevron() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Select({
  state = "default",
  label = true,
  helper = false,
  labelText = "ラベル",
  value = "選択してください",
  helperText = "補助テキスト",
  className,
  ...rest
}: SelectProps) {
  const id = useId();
  const isDisabled = state === "disabled";
  const isPlaceholder = state === "default" || state === "open";
  const fieldClasses = [styles.field, styles[state]].filter(Boolean).join(" ");

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      )}
      <button
        type="button"
        id={id}
        className={fieldClasses}
        disabled={isDisabled}
        aria-haspopup="listbox"
        aria-expanded={state === "open"}
        aria-invalid={state === "error" || undefined}
        {...rest}
      >
        <span className={[styles.value, isPlaceholder && styles.placeholder].filter(Boolean).join(" ")}>
          {value}
        </span>
        <Chevron />
      </button>
      {helper && (
        <span className={[styles.helper, state === "error" && styles.helperError].filter(Boolean).join(" ")}>
          {helperText}
        </span>
      )}
    </div>
  );
}

export default Select;
