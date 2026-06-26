/** Code Connect — Figma BottomNavItem (2818:36) ↔ React <BottomNavItem/>. */
import figma from "@figma/code-connect";
import { BottomNavItem } from "./BottomNavItem";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2818-36";

figma.connect(BottomNavItem, NODE, {
  props: {
    label: figma.string("Label"),
    state: figma.enum("State", { Active: "active", Inactive: "inactive" }),
    badge: figma.enum("Badge", { On: true, Off: false }),
  },
  example: (props) => <BottomNavItem state={props.state} badge={props.badge} label={props.label} />,
});
