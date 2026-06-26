/** Code Connect — Figma TabBar (2116:68) ↔ React <TabBar/>. */
import figma from "@figma/code-connect";
import { TabBar } from "./TabBar";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2116-68";

figma.connect(TabBar, NODE, {
  props: {
    type: figma.enum("Type", { Underline: "underline", Segmented: "segmented" }),
  },
  example: (props) => <TabBar type={props.type} />,
});
