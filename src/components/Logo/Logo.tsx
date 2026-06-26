import type { HTMLAttributes } from "react";
import styles from "./Logo.module.css";

/**
 * Logo (BrandMark) — NativeCamp logo: symbol or text logo, active/inactive.
 * Canon: docs/components logo.md · Figma component-set 283:1452 (page Basic).
 * Not an action trigger (clickable button → Button).
 */
export type LogoState = "symbolActive" | "symbolInactive" | "textActive" | "textInactive";

export interface LogoProps extends HTMLAttributes<HTMLSpanElement> {
  state?: LogoState;
}

export function Logo({ state = "symbolActive", className, ...rest }: LogoProps) {
  const isText = state === "textActive" || state === "textInactive";
  const isActive = state === "symbolActive" || state === "textActive";
  const stateClass = isActive ? styles.active : styles.inactive;
  const classes = [styles.logo, isText ? styles.text : styles.symbol, stateClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} role="img" aria-label="NativeCamp" {...rest}>
      {isText ? "NativeCamp" : "N"}
    </span>
  );
}

export default Logo;
