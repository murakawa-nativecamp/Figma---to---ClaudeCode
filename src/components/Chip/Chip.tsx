import type { HTMLAttributes } from "react";
import styles from "./Chip.module.css";

/**
 * Chip — small selectable/filter label. Hug width.
 * Canon: docs/components chip.md · Figma component-set 2239:2 (page ・Chip).
 */
export type ChipState = "default" | "selected" | "disabled";
export type ChipSize = "l" | "m" | "s";

export interface ChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  state?: ChipState;
  size?: ChipSize;
  label?: string;
}

export function Chip({ state = "default", size = "l", label = "ラベル", className, ...rest }: ChipProps) {
  const classes = [styles.chip, styles[size], styles[state], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {label}
    </span>
  );
}

export default Chip;
