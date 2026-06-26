import type { HTMLAttributes } from "react";
import styles from "./OptionRow.module.css";

/**
 * OptionRow — single-select row with an embedded radio. Canon: option-list.md · Figma 2543:18.
 * Set exactly one row to `selected` to express single selection. Compose in <OptionList/>.
 */
export type OptionRowState = "default" | "selected";

export interface OptionRowProps extends Omit<HTMLAttributes<HTMLButtonElement>, "title"> {
  state?: OptionRowState;
  title?: string;
  description?: string;
  showDescription?: boolean;
}

export function OptionRow({
  state = "default",
  title = "5分 / 日",
  description = "1週間に2レッスン程度",
  showDescription = true,
  className,
  ...rest
}: OptionRowProps) {
  const selected = state === "selected";
  const classes = [styles.row, selected ? styles.selected : styles.default, className]
    .filter(Boolean)
    .join(" ");
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className={classes}
      {...rest}
    >
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {showDescription && <span className={styles.description}>{description}</span>}
      </span>
      <span className={styles.radio} aria-hidden="true">
        {selected && <span className={styles.radioDot} />}
      </span>
    </button>
  );
}

export default OptionRow;
