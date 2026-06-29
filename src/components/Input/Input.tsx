import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

/**
 * Input — single-line text field with label + helper + optional icon.
 * Canon: docs/components input.md · Figma component-set 2063:27 (page ・Input).
 */
export type InputState = "default" | "focus" | "filled" | "error" | "disabled";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  state?: InputState;
  /** Show label (Figma: label boolean). */
  label?: boolean;
  /** Show helper text (Figma: helper boolean). */
  helper?: boolean;
  /** Show icon area (Figma: iconArea boolean). */
  iconArea?: boolean;
  /** Slot icon. */
  icon?: ReactNode;
  labelText?: string;
  value?: string;
  helperText?: string;
}

export function Input({
  state = "default",
  label = true,
  helper = true,
  iconArea = true,
  icon,
  labelText = "メールアドレス",
  value = "you@example.com",
  helperText = "確認メールを送信します",
  className,
  ...rest
}: InputProps) {
  const id = useId();
  const isDisabled = state === "disabled";
  const fieldClasses = [styles.field, styles[state]].filter(Boolean).join(" ");

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      )}
      <div className={fieldClasses}>
        <input
          id={id}
          className={styles.input}
          defaultValue={state === "filled" ? value : undefined}
          placeholder={state === "filled" ? undefined : value}
          disabled={isDisabled}
          aria-invalid={state === "error" || undefined}
          {...rest}
        />
        {iconArea && <span className={styles.icon}>{icon}</span>}
      </div>
      {helper && (
        <span className={[styles.helper, state === "error" && styles.helperError].filter(Boolean).join(" ")}>
          {helperText}
        </span>
      )}
    </div>
  );
}

export default Input;
