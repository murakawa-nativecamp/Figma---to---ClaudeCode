/**
 * Code Connect mapping — Figma Skeleton (component-set 2297:15) ↔ React <Skeleton/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Skeleton } from "./Skeleton";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2297-15";

figma.connect(Skeleton, NODE, {
  props: {
    type: figma.enum("Type", {
      Text: "text",
      ListItem: "listItem",
      Thumbnail: "thumbnail",
    }),
  },
  example: (props) => <Skeleton type={props.type} />,
});
