/**
 * Code Connect mapping — Figma Toast (component-set 2468:12) ↔ React <Toast/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { Toast } from "./Toast";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2468-12";

figma.connect(Toast, NODE, {
  props: {
    color: figma.enum("color", { success: "success", error: "error" }),
    text: figma.string("text"),
    showAction: figma.boolean("showAction"),
  },
  example: (props) => <Toast color={props.color} text={props.text} showAction={props.showAction} />,
});
