import { Children, type HTMLAttributes, type ReactNode } from "react";
import styles from "./List.module.css";

/**
 * List — stack of ListRows with dividers and an outer border/radius.
 * Canon: list.md · Figma 1788:176. Compose <ListRow/> children.
 */
export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function List({ children, className, ...rest }: ListProps) {
  const classes = [styles.list, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      {Children.map(children, (child, i) => (
        <div className={styles.item} data-index={i}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default List;
