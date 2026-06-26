/** Code Connect — Figma History List (2783:1576) ↔ React <HistoryList/>. */
import figma from "@figma/code-connect";
import { HistoryList } from "./HistoryList";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2783-1576";

figma.connect(HistoryList, NODE, {
  props: {
    children: figma.children("*"),
  },
  example: (props) => <HistoryList>{props.children}</HistoryList>,
});
