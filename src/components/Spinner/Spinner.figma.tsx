/**
 * Code Connect mapping — Figma Spinner (component-set 2283:2) ↔ React <Spinner/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Spinner } from "./Spinner";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2283-2";

figma.connect(Spinner, NODE, {
  props: {
    size: figma.enum("Size", { L: "l", M: "m", S: "s" }),
  },
  example: (props) => <Spinner size={props.size} />,
});
