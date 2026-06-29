import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./CardAction.module.css";

/**
 * CardAction — action element inside a Card (label + icon).
 * Canon: docs/components card-action.md · Figma component 2731:240 (page [wip] Card).
 */
export interface CardActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  /** Icon slot. */
  icon?: ReactNode;
}

export function CardAction({ label = "アクション", icon, className, ...rest }: CardActionProps) {
  return (
    <button type="button" className={[styles.action, className].filter(Boolean).join(" ")} {...rest}>
      <span className={styles.label}>{label}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default CardAction;
