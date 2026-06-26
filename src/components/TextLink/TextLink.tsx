import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./TextLink.module.css";

/** TextLink — inline link ("もっと見る" etc.). Canon: text-link.md · Figma 990:227. */
export interface TextLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  size?: "l" | "m" | "s";
  state?: "default" | "disabled";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: string;
  children?: ReactNode;
}

export function TextLink({
  size = "l",
  state = "default",
  iconLeft,
  iconRight,
  label = "もっと見る",
  children,
  className,
  ...rest
}: TextLinkProps) {
  const isDisabled = state === "disabled";
  const classes = [styles.link, styles[size], isDisabled && styles.disabled, className].filter(Boolean).join(" ");
  return (
    <a className={classes} aria-disabled={isDisabled || undefined} {...rest}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span>{children ?? label}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </a>
  );
}

export default TextLink;
