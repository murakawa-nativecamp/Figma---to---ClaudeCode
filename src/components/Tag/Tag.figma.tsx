/**
 * Code Connect mapping — Figma Tag (component-set 2259:2) ↔ React <Tag/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Tag } from "./Tag";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2259-2";

figma.connect(Tag, NODE, {
  props: {
    label: figma.string("Label"),
    color: figma.enum("Color", {
      Success: "success",
      Error: "error",
      Warning: "warning",
      Neutral: "neutral",
    }),
  },
  example: (props) => <Tag color={props.color} label={props.label} />,
});
