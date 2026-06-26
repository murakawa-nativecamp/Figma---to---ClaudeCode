import type { HTMLAttributes, CSSProperties } from "react";
import styles from "./Slider.module.css";

/**
 * Slider — adjust a value within a range (0–100).
 * Canon: docs/components slider.md · Figma node 2294:6 (page ・Slider).
 */
export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Current value as percent (0–100). */
  value?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
}

export function Slider({ value = 50, disabled = false, min = 0, max = 100, className, ...rest }: SliderProps) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  const classes = [styles.slider, disabled && styles.disabled, className].filter(Boolean).join(" ");
  const fillStyle = { width: `${pct}%` } as CSSProperties;
  const knobStyle = { left: `${pct}%` } as CSSProperties;

  return (
    <div
      className={classes}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      <div className={styles.track}>
        <div className={styles.fill} style={fillStyle} />
      </div>
      <span className={styles.knob} style={knobStyle} aria-hidden="true" />
    </div>
  );
}

export default Slider;
