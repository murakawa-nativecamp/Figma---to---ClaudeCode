import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./IconButton.module.css";

/** IconButton — icon-only square/circle button. Canon: icon-button.md · Figma 987:339. */
export type IconButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "reservation";
export type IconButtonSize = "xl" | "l" | "m" | "s";
export type IconButtonShape = "circle" | "square";

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  state?: "default" | "disabled";
  icon: ReactNode;
  /** Accessible name — required for icon-only controls. */
  "aria-label": string;
}

export function IconButton({
  variant = "primary",
  size = "xl",
  shape = "circle",
  state = "default",
  icon,
  className,
  ...rest
}: IconButtonProps) {
  const isDisabled = state === "disabled";
  const classes = [styles.btn, styles[size], styles[shape], styles[variant], isDisabled && styles.disabled, className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={classes} disabled={isDisabled} {...rest}>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}

export default IconButton;
