import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Banner.module.css";

/**
 * Banner — persistent in-page message strip (info/warning/success/error).
 * Canon: docs/components banner.md · Figma component-set 2457:18 (page ・Banner).
 * Transient messages → Toast.
 */
export type BannerColor = "success" | "error" | "warning" | "info";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  color?: BannerColor;
  text?: string;
  /** Show close (✕) button (Figma: showClose boolean). */
  showClose?: boolean;
  /** Optional leading icon slot. */
  icon?: ReactNode;
}

export function Banner({
  color = "success",
  text = "メッセージ",
  showClose = true,
  icon,
  className,
  ...rest
}: BannerProps) {
  return (
    <div className={[styles.banner, styles[color], className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
      {showClose && (
        <button type="button" className={styles.close} aria-label="閉じる">
          ✕
        </button>
      )}
    </div>
  );
}

export default Banner;
