/**
 * Code Connect mapping — Figma Banner (component-set 2457:18) ↔ React <Banner/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { Banner } from "./Banner";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2457-18";

figma.connect(Banner, NODE, {
  props: {
    color: figma.enum("color", {
      success: "success",
      error: "error",
      warning: "warning",
      info: "info",
    }),
    text: figma.string("text"),
    showClose: figma.boolean("showClose"),
  },
  example: (props) => <Banner color={props.color} text={props.text} showClose={props.showClose} />,
});
