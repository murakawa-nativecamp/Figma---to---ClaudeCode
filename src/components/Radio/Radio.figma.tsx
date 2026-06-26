/**
 * Code Connect mapping — Figma Radio (component-set 2134:23) ↔ React <Radio/>.
 */
import figma from "@figma/code-connect";
import { Radio } from "./Radio";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2134-23";

figma.connect(Radio, NODE, {
  props: {
    value: figma.enum("value", {
      selected: "selected",
      unselected: "unselected",
    }),
    state: figma.enum("state", {
      default: "default",
      disabled: "disabled",
      error: "error",
    }),
    label: figma.boolean("label"),
    labelText: figma.string("labelText"),
  },
  example: (props) => (
    <Radio value={props.value} state={props.state} label={props.label} labelText={props.labelText} />
  ),
});
