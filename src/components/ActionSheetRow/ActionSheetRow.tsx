import type { ButtonHTMLAttributes } from "react";
import styles from "./ActionSheetRow.module.css";

/**
 * ActionSheetRow — a single action row inside an ActionSheet.
 * Canon: docs/components action-sheet.md · Figma component 2439:8 (page ・ActionSheet).
 */
export type ActionSheetRowState = "default" | "destructive";

export interface ActionSheetRowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: ActionSheetRowState;
  label?: string;
}

export function ActionSheetRow({
  state = "default",
  label = "アクション",
  className,
  ...rest
}: ActionSheetRowProps) {
  const classes = [styles.row, styles[state], className].filter(Boolean).join(" ");
  return (
    <button type="button" className={classes} {...rest}>
      {label}
    </button>
  );
}

export default ActionSheetRow;
