/** Code Connect — Figma DropdownFilter (2142:37) ↔ React <DropdownFilter/>. */
import figma from "@figma/code-connect";
import { DropdownFilter } from "./DropdownFilter";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2142-37";

figma.connect(DropdownFilter, NODE, {
  props: {
    children: figma.children("*"),
  },
  example: (props) => <DropdownFilter>{props.children}</DropdownFilter>,
});
