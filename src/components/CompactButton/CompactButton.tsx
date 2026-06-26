import { Button, type ButtonProps } from "../Button/Button";

/**
 * CompactButton — text-centric button, Hug width (cancel/save/「5分」chip CTAs).
 * Canon: compact-button.md · Figma component-set 1375:2316.
 * Same visual system as Button; distinct Figma component, so kept as its own export
 * (Hug width is already Button's inline-flex default). Icons optional.
 */
export type CompactButtonProps = ButtonProps;

export function CompactButton(props: CompactButtonProps) {
  return <Button {...props} />;
}

export default CompactButton;
