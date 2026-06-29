/**
 * Code Connect mapping — Figma Checkbox (component-set 2128:42) ↔ React <Checkbox/>.
 */
import figma from "@figma/code-connect";
import { Checkbox } from "./Checkbox";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2128-42";

figma.connect(Checkbox, NODE, {
  props: {
    value: figma.enum("value", {
      unchecked: "unchecked",
      checked: "checked",
      indeterminate: "indeterminate",
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
    <Checkbox value={props.value} state={props.state} label={props.label} labelText={props.labelText} />
  ),
});
