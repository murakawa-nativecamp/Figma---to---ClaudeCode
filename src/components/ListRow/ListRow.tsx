import type { HTMLAttributes, ReactNode } from "react";
import styles from "./ListRow.module.css";

/**
 * ListRow — one row of a settings/mypage list. Canon: list.md · Figma 1040:83.
 * Right-edge element switches by `type`. Compose rows in <List/>.
 */
export type ListRowType = "navigation" | "toggle" | "value" | "action" | "valueOnly";
export type ListRowState = "default" | "disabled";

export interface ListRowProps extends HTMLAttributes<HTMLDivElement> {
  type?: ListRowType;
  state?: ListRowState;
  icon?: boolean;
  badge?: boolean;
  label?: string;
  value?: string;
  /** left icon slot */
  iconSlot?: ReactNode;
  /** badge slot (Badge) */
  badgeSlot?: ReactNode;
  /** trailing slot (e.g. ToggleSwitch for type=toggle) */
  trailingSlot?: ReactNode;
}

export function ListRow({
  type = "navigation",
  state = "default",
  icon = true,
  badge = false,
  label = "ラベル",
  value = "値",
  iconSlot,
  badgeSlot,
  trailingSlot,
  className,
  ...rest
}: ListRowProps) {
  const isDisabled = state === "disabled";
  const classes = [styles.row, isDisabled && styles.disabled, className].filter(Boolean).join(" ");
  const showChevron = type === "navigation" || type === "value";
  const showValue = type === "value" || type === "valueOnly";
  return (
    <div className={classes} aria-disabled={isDisabled || undefined} {...rest}>
      {icon && <span className={styles.icon}>{iconSlot}</span>}
      <span className={styles.label}>{label}</span>
      {badge && <span className={styles.badge}>{badgeSlot}</span>}
      <span className={styles.trailing}>
        {showValue && <span className={styles.value}>{value}</span>}
        {type === "toggle" && trailingSlot}
        {type === "action" && trailingSlot}
        {showChevron && <span className={styles.chevron} aria-hidden="true" />}
      </span>
    </div>
  );
}

export default ListRow;
