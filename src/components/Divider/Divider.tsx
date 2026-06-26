import type { HTMLAttributes } from "react";
import styles from "./Divider.module.css";

/**
 * Divider — separates regions. Horizontal / vertical / labelled.
 * Canon: docs/components divider.md · Figma component-set 2249:2 (page ・Divider).
 */
export type DividerType = "horizontal" | "vertical" | "withLabel";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  type?: DividerType;
  /** Center label, shown only when type="withLabel". */
  label?: string;
}

export function Divider({ type = "horizontal", label = "ラベル", className, ...rest }: DividerProps) {
  const classes = [styles.divider, styles[type], className].filter(Boolean).join(" ");
  if (type === "withLabel") {
    return (
      <div className={classes} role="separator" {...rest}>
        <span className={styles.line} aria-hidden="true" />
        <span className={styles.label}>{label}</span>
        <span className={styles.line} aria-hidden="true" />
      </div>
    );
  }
  return (
    <div
      className={classes}
      role="separator"
      aria-orientation={type === "vertical" ? "vertical" : "horizontal"}
      {...rest}
    />
  );
}

export default Divider;
