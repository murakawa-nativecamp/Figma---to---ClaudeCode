/**
 * Code Connect mapping — Figma Select (component-set 2170:39) ↔ React <Select/>.
 */
import figma from "@figma/code-connect";
import { Select } from "./Select";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2170-39";

figma.connect(Select, NODE, {
  props: {
    state: figma.enum("state", {
      default: "default",
      filled: "filled",
      error: "error",
      disabled: "disabled",
      open: "open",
    }),
    label: figma.boolean("label"),
    helper: figma.boolean("helper"),
    labelText: figma.string("labelText"),
    value: figma.string("value"),
    helperText: figma.string("helperText"),
  },
  example: (props) => (
    <Select
      state={props.state}
      label={props.label}
      helper={props.helper}
      labelText={props.labelText}
      value={props.value}
      helperText={props.helperText}
    />
  ),
});
