import figma from "@figma/code-connect";
import { CompactButton } from "./CompactButton";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=1375-2316";

figma.connect(CompactButton, NODE, {
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
  },
  example: (props) => <CompactButton variant={props.variant} size={props.size} state={props.state} label={props.label} />,
});
