import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

/**
 * Button — primary/auxiliary action trigger.
 * Canon: docs/components button.md · Figma component-set 973:521 (page ・Button).
 * NOTE: this is the icon-capable standard button. Text-only → CompactButton,
 * icon-only → IconButton, link → TextLink.
 */
export type ButtonVariant =
  | "primary"
  | "gradient"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "danger"
  | "reservation";
export type ButtonSize = "xl" | "l" | "m" | "s";
export type ButtonState = "default" | "loading" | "disabled";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  /** Icon shown left of the label (Figma: IconLeft boolean). */
  iconLeft?: ReactNode;
  /** Icon shown right of the label (Figma: IconRight boolean). */
  iconRight?: ReactNode;
  label?: string;
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "xl",
  state = "default",
  iconLeft,
  iconRight,
  label = "Button",
  children,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = state === "disabled";
  const isLoading = state === "loading";
  const classes = [
    styles.btn,
    styles[size],
    styles[variant],
    isDisabled && styles.disabled,
    isLoading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={isDisabled || isLoading} aria-busy={isLoading} {...rest}>
      {isLoading && <span className={styles.spinner} aria-hidden="true" />}
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span className={styles.label}>{children ?? label}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
}

export default Button;
