import type { HTMLAttributes } from "react";
import styles from "./Tag.module.css";

/**
 * Tag — classification/state label with semantic color.
 * Canon: docs/components tag.md · Figma component-set 2259:2 (page ・Tag).
 */
export type TagColor = "success" | "error" | "warning" | "neutral";

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  color?: TagColor;
  label?: string;
}

export function Tag({ color = "success", label = "ラベル", className, ...rest }: TagProps) {
  const classes = [styles.tag, styles[color], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {label}
    </span>
  );
}

export default Tag;
