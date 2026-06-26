import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Dialog.module.css";

/**
 * Dialog — center confirmation overlay for urgent / irreversible decisions.
 * Canon: docs/components dialog.md · Figma component-set 2337:50 (page ・Dialog).
 * Confirm action color: default→brand.primary, destructive→status.error.
 */
export type DialogType = "default" | "destructive";

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  type?: DialogType;
  title?: string;
  body?: string;
  /** Show body text (Figma: showBody boolean). */
  showBody?: boolean;
  /** Show cancel button (Figma: showCancel boolean). */
  showCancel?: boolean;
  /** Show leading icon (Figma: showIcon boolean). */
  showIcon?: boolean;
  /** Show input field (Figma: showInput boolean). */
  showInput?: boolean;
  /** Show notes (Figma: showNotes boolean). */
  showNotes?: boolean;
  notes?: string;
  /** Notes slot override (Figma: slotNotes). */
  slotNotes?: ReactNode;
  /** Icon slot (used when showIcon). */
  icon?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
}

export function Dialog({
  type = "default",
  title = "教材を削除しますか？",
  body = "この操作は取り消せません。",
  showBody = true,
  showCancel = true,
  showIcon = false,
  showInput = false,
  showNotes = false,
  notes = "注釈テキスト",
  slotNotes,
  icon,
  confirmLabel = "削除する",
  cancelLabel = "キャンセル",
  className,
  ...rest
}: DialogProps) {
  return (
    <div
      className={[styles.dialog, className].filter(Boolean).join(" ")}
      role="dialog"
      aria-modal="true"
      {...rest}
    >
      {showIcon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.texts}>
        <h2 className={styles.title}>{title}</h2>
        {showBody && <p className={styles.body}>{body}</p>}
      </div>
      {showInput && <input className={styles.input} type="text" />}
      {showNotes && <div className={styles.notes}>{slotNotes ?? notes}</div>}
      <div className={styles.actions}>
        {showCancel && (
          <button type="button" className={[styles.btn, styles.cancel].join(" ")}>
            {cancelLabel}
          </button>
        )}
        <button
          type="button"
          className={[styles.btn, type === "destructive" ? styles.destructive : styles.confirm].join(" ")}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}

export default Dialog;
