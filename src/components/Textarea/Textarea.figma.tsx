/**
 * Code Connect mapping — Figma Textarea (component-set 2757:2) ↔ React <Textarea/>.
 */
import figma from "@figma/code-connect";
import { Textarea } from "./Textarea";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2757-2";

figma.connect(Textarea, NODE, {
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
    <Textarea
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
