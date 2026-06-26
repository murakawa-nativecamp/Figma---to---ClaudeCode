/**
 * Code Connect mapping — Figma Select Compact (component-set 2178:55) ↔ React <SelectCompact/>.
 */
import figma from "@figma/code-connect";
import { SelectCompact } from "./SelectCompact";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2178-55";

figma.connect(SelectCompact, NODE, {
  props: {
    state: figma.enum("state", {
      default: "default",
      disabled: "disabled",
    }),
    value: figma.string("value"),
  },
  example: (props) => <SelectCompact state={props.state} value={props.value} />,
});
