import { useState, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Accordion.module.css";

/**
 * Accordion — single collapsible row. Canon: accordion.md · Figma 2427:12.
 * `state` sets the initial open/closed; toggling is handled internally.
 */
export type AccordionState = "collapsed" | "expanded";

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  state?: AccordionState;
  title?: string;
  body?: ReactNode;
}

export function Accordion({
  state = "collapsed",
  title = "見出し",
  body,
  className,
  ...rest
}: AccordionProps) {
  const [open, setOpen] = useState(state === "expanded");
  const classes = [styles.accordion, open ? styles.expanded : styles.collapsed, className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...rest}>
      <button className={styles.header} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span className={styles.title}>{title}</span>
        <span className={styles.chevron} aria-hidden="true" />
      </button>
      {open && <div className={styles.body}>{body}</div>}
    </div>
  );
}

export default Accordion;
