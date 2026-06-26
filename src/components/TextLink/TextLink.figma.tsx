import figma from "@figma/code-connect";
import { TextLink } from "./TextLink";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=990-227";

figma.connect(TextLink, NODE, {
  props: {
    label: figma.string("Label"),
    size: figma.enum("Size", { L: "l", M: "m", S: "s" }),
    state: figma.enum("State", { Default: "default", Disabled: "disabled" }),
    iconLeft: figma.boolean("IconLeft", { true: figma.instance("↳ IconLeft"), false: undefined }),
    iconRight: figma.boolean("IconRight", { true: figma.instance("↳ IconRight"), false: undefined }),
  },
  example: (props) => (
    <TextLink size={props.size} state={props.state} label={props.label} iconLeft={props.iconLeft} iconRight={props.iconRight} />
  ),
});
