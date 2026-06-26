/**
 * Code Connect mapping — Figma Divider (component-set 2249:2) ↔ React <Divider/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Divider } from "./Divider";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2249-2";

figma.connect(Divider, NODE, {
  props: {
    type: figma.enum("Type", {
      Horizontal: "horizontal",
      Vertical: "vertical",
      WithLabel: "withLabel",
    }),
    label: figma.string("Label"),
  },
  example: (props) => <Divider type={props.type} label={props.label} />,
});
