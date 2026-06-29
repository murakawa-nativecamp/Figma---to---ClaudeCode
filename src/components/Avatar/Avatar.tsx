import type { HTMLAttributes } from "react";
import styles from "./Avatar.module.css";

/**
 * Avatar — circular user/tutor icon, initials fallback when no image.
 * Canon: docs/components avatar.md · Figma component-set 2289:2 (page ・Avatar).
 */
export type AvatarSize = "xl" | "l" | "m" | "s";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize;
  /** Image URL; when absent, initials are shown. */
  src?: string;
  alt?: string;
  initials?: string;
}

export function Avatar({ size = "xl", src, alt = "", initials = "AB", className, ...rest }: AvatarProps) {
  const classes = [styles.avatar, styles[size], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {src ? <img className={styles.img} src={src} alt={alt} /> : <span className={styles.initials}>{initials}</span>}
    </span>
  );
}

export default Avatar;
