/**
 * Code Connect mapping — Figma ActionSheet (component 2440:14) ↔ React <ActionSheet/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { ActionSheet } from "./ActionSheet";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2440-14";

figma.connect(ActionSheet, NODE, {
  props: {
    children: figma.children("grp"),
    showCancel: figma.boolean("showCancel"),
  },
  example: (props) => <ActionSheet showCancel={props.showCancel}>{props.children}</ActionSheet>,
});
