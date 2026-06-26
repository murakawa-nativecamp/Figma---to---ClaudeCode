/**
 * Code Connect mapping — Figma Button (component-set 973:521) ↔ React <Button/>.
 * Generated for `/code-connect-components`. Publish with: npx figma connect publish
 * (requires a Figma token with Dev/Full seat). See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Button } from "./Button";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=973-521";

figma.connect(Button, NODE, {
  props: {
    label: figma.string("Label"),
    variant: figma.enum("Variant", {
      Primary: "primary",
      Gradient: "gradient",
      Secondary: "secondary",
      Tertiary: "tertiary",
      Ghost: "ghost",
      Danger: "danger",
      Reservation: "reservation",
    }),
    size: figma.enum("Size", { XL: "xl", L: "l", M: "m", S: "s" }),
    state: figma.enum("State", { Default: "default", Loading: "loading", Disabled: "disabled" }),
    iconLeft: figma.boolean("IconLeft", { true: figma.instance("↳ IconLeft"), false: undefined }),
    iconRight: figma.boolean("IconRight", { true: figma.instance("↳ IconRight"), false: undefined }),
  },
  example: (props) => (
    <Button
      variant={props.variant}
      size={props.size}
      state={props.state}
      label={props.label}
      iconLeft={props.iconLeft}
      iconRight={props.iconRight}
    />
  ),
});
