import type { HTMLAttributes, ReactNode } from "react";
import styles from "./ActionSheet.module.css";

/**
 * ActionSheet — bottom action menu: a group of rows + separated cancel.
 * Canon: docs/components action-sheet.md · Figma component 2440:14 (page ・ActionSheet).
 * Rows are <ActionSheetRow/>. Pattern (close behavior) → modal.md.
 */
export interface ActionSheetProps extends HTMLAttributes<HTMLDivElement> {
  /** Group of action rows (Figma: grp slot). */
  children?: ReactNode;
  /** Show separated cancel row (Figma: showCancel boolean). */
  showCancel?: boolean;
  cancelLabel?: string;
}

export function ActionSheet({
  children,
  showCancel = true,
  cancelLabel = "キャンセル",
  className,
  ...rest
}: ActionSheetProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} role="menu" {...rest}>
      <div className={styles.group}>{children}</div>
      {showCancel && (
        <button type="button" className={styles.cancel}>
          {cancelLabel}
        </button>
      )}
    </div>
  );
}

export default ActionSheet;
