import figma from "@figma/code-connect";
import { IconButton } from "./IconButton";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=987-339";

figma.connect(IconButton, NODE, {
  props: {
    variant: figma.enum("Variant", {
      Primary: "primary",
      Secondary: "secondary",
      Tertiary: "tertiary",
      Ghost: "ghost",
      Danger: "danger",
      Reservation: "reservation",
    }),
    size: figma.enum("Size", { XL: "xl", L: "l", M: "m", S: "s" }),
    shape: figma.enum("Shape", { Circle: "circle", Square: "square" }),
    state: figma.enum("State", { Default: "default", Disabled: "disabled" }),
    icon: figma.instance("Icon"),
  },
  example: (props) => (
    <IconButton variant={props.variant} size={props.size} shape={props.shape} state={props.state} icon={props.icon} aria-label="" />
  ),
});
