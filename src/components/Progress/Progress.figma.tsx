/**
 * Code Connect mapping — Figma Progress (2292:4) ↔ React <Progress/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Progress } from "./Progress";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2292-4";

figma.connect(Progress, NODE, {
  props: {
    value: figma.string("Value"),
  },
  example: (props) => <Progress value={Number(props.value)} />,
});
