/** Code Connect — Figma List (1788:176) ↔ React <List/>. */
import figma from "@figma/code-connect";
import { List } from "./List";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=1788-176";

figma.connect(List, NODE, {
  props: {
    children: figma.children("*"),
  },
  example: (props) => <List>{props.children}</List>,
});
