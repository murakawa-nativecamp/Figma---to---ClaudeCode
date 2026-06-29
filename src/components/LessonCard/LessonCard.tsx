import type { HTMLAttributes, ReactNode } from "react";
import styles from "./LessonCard.module.css";

/**
 * LessonCard — NativeCamp domain card for one lesson (datetime, teacher, material, notes, action).
 * Canon: docs/components lesson-card.md · Figma component 2733:2965 (page [wip] Card).
 * Composes Button / Badge / Avatar / Icon internally.
 */
export interface LessonCardProps extends HTMLAttributes<HTMLDivElement> {
  date?: string;
  teacher?: string;
  notes?: string;
  /** Show top-right menu (…) (Figma: showMenu boolean). */
  showMenu?: boolean;
  /** Show primary action button (Figma: showButton boolean). */
  showButton?: boolean;
  /** Show material info (Figma: showMaterial boolean). */
  showMaterial?: boolean;
  /** Show notes (Figma: showNotes boolean). */
  showNotes?: boolean;
  /** Show action area (Figma: showAction boolean). */
  showAction?: boolean;
  /** Action area override (Figma: actionSlot). */
  actionSlot?: ReactNode;
  material?: string;
  buttonLabel?: string;
}

export function LessonCard({
  date = "2026/06/19 17:30",
  teacher = "Luke - ルーク",
  notes = "・発話率：未対応教材",
  showMenu = true,
  showButton = true,
  showMaterial = true,
  showNotes = true,
  showAction = true,
  actionSlot,
  material = "デイリーニュース",
  buttonLabel = "予約する",
  className,
  ...rest
}: LessonCardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")} {...rest}>
      <div className={styles.header}>
        <span className={styles.date}>{date}</span>
        {showMenu && (
          <button type="button" className={styles.menu} aria-label="メニュー">
            ⋯
          </button>
        )}
      </div>
      <div className={styles.teacherRow}>
        <span className={styles.avatar} aria-hidden="true" />
        <span className={styles.teacher}>{teacher}</span>
      </div>
      {showMaterial && <span className={styles.material}>{material}</span>}
      {showNotes && <span className={styles.notes}>{notes}</span>}
      {showAction && (
        <div className={styles.action}>
          {actionSlot ??
            (showButton && (
              <button type="button" className={styles.button}>
                {buttonLabel}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default LessonCard;
