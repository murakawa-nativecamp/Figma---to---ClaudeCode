/**
 * Code Connect mapping — Figma Card Action (component 2731:240) ↔ React <CardAction/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { CardAction } from "./CardAction";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2731-240";

figma.connect(CardAction, NODE, {
  props: {
    label: figma.string("label"),
  },
  example: (props) => <CardAction label={props.label} />,
});
