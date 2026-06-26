import { useId } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

/**
 * Checkbox — multi-select / on-off with label.
 * Canon: docs/components checkbox.md · Figma component-set 2128:42 (page ・Checkbox).
 */
export type CheckboxValue = "unchecked" | "checked" | "indeterminate";
export type CheckboxState = "default" | "disabled" | "error";

export interface CheckboxProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  value?: CheckboxValue;
  state?: CheckboxState;
  label?: boolean;
  labelText?: string;
  onChange?: (next: boolean) => void;
}

export function Checkbox({
  value = "unchecked",
  state = "default",
  label = true,
  labelText = "ラベル",
  className,
  onChange,
  ...rest
}: CheckboxProps) {
  const id = useId();
  const isDisabled = state === "disabled";
  const ariaChecked: boolean | "mixed" =
    value === "indeterminate" ? "mixed" : value === "checked";

  const boxClasses = [styles.box, styles[value], styles[state]].filter(Boolean).join(" ");

  return (
    <label className={[styles.root, isDisabled && styles.rootDisabled, className].filter(Boolean).join(" ")}>
      <button
        type="button"
        id={id}
        role="checkbox"
        aria-checked={ariaChecked}
        disabled={isDisabled}
        className={boxClasses}
        onClick={() => onChange?.(value !== "checked")}
        {...rest}
      >
        {value === "checked" && (
          <svg className={styles.mark} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12l5 5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {value === "indeterminate" && <span className={styles.dash} aria-hidden="true" />}
      </button>
      {label && <span className={styles.label}>{labelText}</span>}
    </label>
  );
}

export default Checkbox;
