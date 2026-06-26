/** Code Connect — Figma Tab (2106:650) ↔ React <Tab/>. */
import figma from "@figma/code-connect";
import { Tab } from "./Tab";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2106-650";

figma.connect(Tab, NODE, {
  props: {
    label: figma.string("Label"),
    type: figma.enum("Type", { Underline: "underline", Segmented: "segmented" }),
    state: figma.enum("State", { Active: "active", Inactive: "inactive", Disabled: "disabled" }),
  },
  example: (props) => <Tab type={props.type} state={props.state} label={props.label} />,
});
