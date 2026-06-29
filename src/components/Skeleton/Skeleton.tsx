import type { HTMLAttributes } from "react";
import styles from "./Skeleton.module.css";

/**
 * Skeleton — loading placeholder shaped like the real content.
 * Canon: docs/components skeleton.md · Figma component-set 2297:15 (page ・Skeleton).
 */
export type SkeletonType = "text" | "listItem" | "thumbnail";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  type?: SkeletonType;
}

export function Skeleton({ type = "text", className, ...rest }: SkeletonProps) {
  const classes = [styles.skeleton, styles[type], className].filter(Boolean).join(" ");
  if (type === "listItem") {
    return (
      <div className={classes} aria-hidden="true" {...rest}>
        <span className={styles.thumb} />
        <span className={styles.lines}>
          <span className={styles.line} />
          <span className={styles.lineShort} />
        </span>
      </div>
    );
  }
  if (type === "thumbnail") {
    return <div className={classes} aria-hidden="true" {...rest} />;
  }
  return (
    <div className={classes} aria-hidden="true" {...rest}>
      <span className={styles.line} />
      <span className={styles.lineShort} />
    </div>
  );
}

export default Skeleton;
