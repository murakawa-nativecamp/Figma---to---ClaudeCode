/**
 * Code Connect mapping — Figma ActionSheet Row (component 2439:8) ↔ React <ActionSheetRow/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { ActionSheetRow } from "./ActionSheetRow";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2439-8";

figma.connect(ActionSheetRow, NODE, {
  props: {
    state: figma.enum("state", { default: "default", destructive: "destructive" }),
    label: figma.string("label"),
  },
  example: (props) => <ActionSheetRow state={props.state} label={props.label} />,
});
