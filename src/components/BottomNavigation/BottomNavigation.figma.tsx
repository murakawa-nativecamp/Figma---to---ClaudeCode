/** Code Connect — Figma BottomNavigation (2819:253) ↔ React <BottomNavigation/>. */
import figma from "@figma/code-connect";
import { BottomNavigation } from "./BottomNavigation";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2819-253";

figma.connect(BottomNavigation, NODE, {
  props: {
    type: figma.enum("Type", { Global: "global", Feature: "feature" }),
  },
  example: (props) => <BottomNavigation type={props.type} />,
});
