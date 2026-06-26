import type { HTMLAttributes, CSSProperties } from "react";
import styles from "./Progress.module.css";

/**
 * Progress — determinate progress bar (0–100%). Indeterminate → Spinner.
 * Canon: docs/components progress.md · Figma 2292:4 (page ・Progress).
 */
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress percentage, 0–100. */
  value?: number;
}

export function Progress({ value = 0, className, style, ...rest }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const classes = [styles.track, className].filter(Boolean).join(" ");
  const fillStyle = { width: `${clamped}%` } as CSSProperties;
  return (
    <div
      className={classes}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      style={style}
      {...rest}
    >
      <div className={styles.fill} style={fillStyle} />
    </div>
  );
}

export default Progress;
