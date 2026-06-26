/**
 * Code Connect mapping — Figma Input (component-set 2063:27) ↔ React <Input/>.
 */
import figma from "@figma/code-connect";
import { Input } from "./Input";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2063-27";

figma.connect(Input, NODE, {
  props: {
    state: figma.enum("state", {
      default: "default",
      focus: "focus",
      filled: "filled",
      error: "error",
      disabled: "disabled",
    }),
    label: figma.boolean("label"),
    helper: figma.boolean("helper"),
    iconArea: figma.boolean("iconArea"),
    icon: figma.instance("icon"),
    labelText: figma.string("labelText"),
    value: figma.string("value"),
    helperText: figma.string("helperText"),
  },
  example: (props) => (
    <Input
      state={props.state}
      label={props.label}
      helper={props.helper}
      iconArea={props.iconArea}
      icon={props.icon}
      labelText={props.labelText}
      value={props.value}
      helperText={props.helperText}
    />
  ),
});
