import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./SearchBar.module.css";

/**
 * SearchBar — keyword search field. Left search icon; clear (✕) when filled.
 * Canon: docs/components searchbar.md · Figma component-set 2449:20 (page ・SearchBar).
 */
export type SearchBarState = "default" | "filled";

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  state?: SearchBarState;
  text?: string;
  placeholder?: string;
  /** Search icon slot (left). */
  searchIcon?: ReactNode;
  /** Clear icon slot (right, when filled). */
  clearIcon?: ReactNode;
}

export function SearchBar({
  state = "default",
  text = "英会話",
  placeholder = "教材・講師を検索",
  searchIcon,
  clearIcon,
  className,
  ...rest
}: SearchBarProps) {
  const isFilled = state === "filled";
  return (
    <div className={[styles.bar, className].filter(Boolean).join(" ")}>
      <span className={styles.searchIcon} aria-hidden="true">
        {searchIcon}
      </span>
      <input
        className={styles.input}
        type="search"
        role="searchbox"
        placeholder={placeholder}
        defaultValue={isFilled ? text : undefined}
        {...rest}
      />
      {isFilled && (
        <button type="button" className={styles.clear} aria-label="クリア">
          {clearIcon ?? "✕"}
        </button>
      )}
    </div>
  );
}

export default SearchBar;
