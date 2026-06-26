import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Modal.module.css";

/**
 * Modal — overlay that interrupts the flow for confirmation / settings / info.
 * Canon: docs/components modal.md · Figma frame 2371:83 (page Modal).
 * Three placements: dialog/modal (center), bottomSheet (bottom).
 */
export type ModalVariant = "dialog" | "modal" | "bottomSheet";

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: ModalVariant;
  title?: string;
  /** Whether an action button row is present (affects close rules). */
  hasActionButton?: boolean;
  children?: ReactNode;
}

export function Modal({
  variant = "modal",
  title,
  hasActionButton = false,
  children,
  className,
  ...rest
}: ModalProps) {
  const classes = [styles.sheet, styles[variant], className].filter(Boolean).join(" ");
  return (
    <div className={classes} role="dialog" aria-modal="true" {...rest}>
      {variant === "bottomSheet" && <span className={styles.handle} aria-hidden="true" />}
      <div className={styles.header}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {!hasActionButton && (
          <button type="button" className={styles.close} aria-label="閉じる">
            ✕
          </button>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Modal;
