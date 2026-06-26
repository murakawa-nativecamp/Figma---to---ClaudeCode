import type { HTMLAttributes } from "react";
import styles from "./ToggleSwitch.module.css";

/**
 * ToggleSwitch — iOS-style on/off switch (size M, 38×22 fixed).
 * Canon: docs/components toggle-switch.md · Figma component-set 1031:8 (page ・Switch).
 */
export type ToggleSwitchState = "off" | "on" | "disabled";

export interface ToggleSwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  state?: ToggleSwitchState;
  onChange?: (next: boolean) => void;
}

export function ToggleSwitch({ state = "off", className, onChange, ...rest }: ToggleSwitchProps) {
  const isDisabled = state === "disabled";
  const isOn = state === "on";
  const classes = [styles.track, styles[state], className].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      disabled={isDisabled}
      className={classes}
      onClick={() => onChange?.(!isOn)}
      {...rest}
    >
      <span className={styles.knob} aria-hidden="true" />
    </button>
  );
}

export default ToggleSwitch;
