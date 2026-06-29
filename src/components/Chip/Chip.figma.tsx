/**
 * Code Connect mapping — Figma Chip (component-set 2239:2) ↔ React <Chip/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Chip } from "./Chip";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2239-2";

figma.connect(Chip, NODE, {
  props: {
    label: figma.string("Label"),
    state: figma.enum("State", { Default: "default", Selected: "selected", Disabled: "disabled" }),
    size: figma.enum("Size", { L: "l", M: "m", S: "s" }),
  },
  example: (props) => <Chip state={props.state} size={props.size} label={props.label} />,
});
