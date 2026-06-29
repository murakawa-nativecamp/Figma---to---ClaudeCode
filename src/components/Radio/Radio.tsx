import { useId } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Radio.module.css";

/**
 * Radio — single-select within a group, with label.
 * Canon: docs/components radio.md · Figma component-set 2134:23 (page ・Radio).
 */
export type RadioValue = "selected" | "unselected";
export type RadioState = "default" | "disabled" | "error";

export interface RadioProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  value?: RadioValue;
  state?: RadioState;
  label?: boolean;
  labelText?: string;
  name?: string;
  onChange?: () => void;
}

export function Radio({
  value = "selected",
  state = "default",
  label = true,
  labelText = "ラベル",
  name,
  className,
  onChange,
  ...rest
}: RadioProps) {
  const id = useId();
  const isDisabled = state === "disabled";
  const isSelected = value === "selected";

  const circleClasses = [styles.circle, styles[value], styles[state]].filter(Boolean).join(" ");

  return (
    <label className={[styles.root, isDisabled && styles.rootDisabled, className].filter(Boolean).join(" ")}>
      <button
        type="button"
        id={id}
        role="radio"
        name={name}
        aria-checked={isSelected}
        disabled={isDisabled}
        className={circleClasses}
        onClick={() => onChange?.()}
        {...rest}
      >
        {isSelected && <span className={styles.dot} aria-hidden="true" />}
      </button>
      {label && <span className={styles.label}>{labelText}</span>}
    </label>
  );
}

export default Radio;
