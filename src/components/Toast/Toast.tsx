import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Toast.module.css";

/**
 * Toast — transient auto-dismissing notification (save done / error).
 * Canon: docs/components toast.md · Figma component-set 2468:12 (page ・Toast).
 * Timing/animation handled by the caller. Persistent → Banner.
 */
export type ToastColor = "success" | "error";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  color?: ToastColor;
  text?: string;
  /** Show trailing action (e.g. undo) (Figma: showAction boolean). */
  showAction?: boolean;
  actionLabel?: string;
  /** Optional leading icon slot. */
  icon?: ReactNode;
}

export function Toast({
  color = "success",
  text = "保存しました",
  showAction = true,
  actionLabel = "取り消す",
  icon,
  className,
  ...rest
}: ToastProps) {
  return (
    <div className={[styles.toast, styles[color], className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
      {showAction && (
        <button type="button" className={styles.action}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default Toast;
