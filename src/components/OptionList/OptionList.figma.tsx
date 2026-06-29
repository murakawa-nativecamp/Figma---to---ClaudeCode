/** Code Connect — Figma Option List (2544:128) ↔ React <OptionList/>. */
import figma from "@figma/code-connect";
import { OptionList } from "./OptionList";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2544-128";

figma.connect(OptionList, NODE, {
  props: {
    children: figma.children("*"),
  },
  example: (props) => <OptionList>{props.children}</OptionList>,
});
