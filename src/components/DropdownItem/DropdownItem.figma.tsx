/** Code Connect — Figma DropdownItem (2141:14) ↔ React <DropdownItem/>. */
import figma from "@figma/code-connect";
import { DropdownItem } from "./DropdownItem";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2141-14";

figma.connect(DropdownItem, NODE, {
  props: {
    label: figma.string("Label"),
    state: figma.enum("State", { Default: "default", Selected: "selected", Disabled: "disabled" }),
  },
  example: (props) => <DropdownItem state={props.state} label={props.label} />,
});
