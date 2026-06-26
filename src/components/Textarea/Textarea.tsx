import { useId } from "react";
import type { TextareaHTMLAttributes, ReactNode } from "react";
import styles from "./Textarea.module.css";

/**
 * Textarea — multi-line text field with label + helper.
 * Canon: docs/components textarea.md · Figma component-set 2757:2 (page ・Input).
 * Same state system as Input; background filled with surface.secondary.
 */
export type TextareaState = "default" | "focus" | "filled" | "error" | "disabled";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value"> {
  state?: TextareaState;
  label?: boolean;
  helper?: boolean;
  iconArea?: boolean;
  icon?: ReactNode;
  labelText?: string;
  value?: string;
  helperText?: string;
}

export function Textarea({
  state = "default",
  label = true,
  helper = true,
  iconArea = true,
  icon,
  labelText = "コメント",
  value = "内容を入力してください。",
  helperText = "自由にご記入ください",
  className,
  rows = 4,
  ...rest
}: TextareaProps) {
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
        <textarea
          id={id}
          className={styles.textarea}
          rows={rows}
          defaultValue={state === "filled" ? value : undefined}
          placeholder={state === "filled" ? undefined : value}
          disabled={isDisabled}
          aria-invalid={state === "error" || undefined}
          {...rest}
        />
        {iconArea && icon && <span className={styles.icon}>{icon}</span>}
      </div>
      {helper && (
        <span className={[styles.helper, state === "error" && styles.helperError].filter(Boolean).join(" ")}>
          {helperText}
        </span>
      )}
    </div>
  );
}

export default Textarea;
