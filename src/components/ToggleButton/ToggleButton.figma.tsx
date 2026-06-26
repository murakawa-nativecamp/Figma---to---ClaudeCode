/**
 * Code Connect mapping — Figma Toggle Button (component-set 983:224) ↔ React <ToggleButton/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { ToggleButton } from "./ToggleButton";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=983-224";

figma.connect(ToggleButton, NODE, {
  props: {
    label: figma.string("Label"),
    state: figma.enum("State", { Unselected: "unselected", Selected: "selected", Disabled: "disabled" }),
    size: figma.enum("Size", { L: "l", M: "m", S: "s" }),
    icon: figma.boolean("icon", { true: figma.instance("↳ icon"), false: undefined }),
  },
  example: (props) => (
    <ToggleButton state={props.state} size={props.size} label={props.label} icon={props.icon} />
  ),
});
