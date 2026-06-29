import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ToggleButton.module.css";

/**
 * ToggleButton — chip-shaped toggle for filter/selection UI. Hug width.
 * Canon: docs/components toggle-button.md · Figma component-set 983:224 (page ・Button).
 * Selection logic lives in the caller; this reflects visual state only.
 */
export type ToggleButtonState = "unselected" | "selected" | "disabled";
export type ToggleButtonSize = "l" | "m" | "s";

export interface ToggleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  state?: ToggleButtonState;
  size?: ToggleButtonSize;
  /** Left icon (Figma: icon boolean). */
  icon?: ReactNode;
  label?: string;
}

export function ToggleButton({
  state = "unselected",
  size = "l",
  icon,
  label = "Filter",
  className,
  ...rest
}: ToggleButtonProps) {
  const isDisabled = state === "disabled";
  const classes = [styles.toggle, styles[size], styles[state], className].filter(Boolean).join(" ");
  return (
    <button
      type="button"
      className={classes}
      disabled={isDisabled}
      aria-pressed={state === "selected"}
      {...rest}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default ToggleButton;
