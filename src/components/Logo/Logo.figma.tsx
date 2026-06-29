/**
 * Code Connect mapping — Figma Logo/BrandMark (component-set 283:1452) ↔ React <Logo/>.
 * NOTE: Figma variant names use the "State" property; "Tex† - Active" is a Figma typo
 * for "Text - Active" (see _figma-rename-proposal.md). Mapped to the corrected enum here.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { Logo } from "./Logo";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=283-1452";

figma.connect(Logo, NODE, {
  props: {
    state: figma.enum("State", {
      "Symbol - Active": "symbolActive",
      "Symbol - Inactive": "symbolInactive",
      "Text - Active": "textActive",
      "Text - Inactive": "textInactive",
    }),
  },
  example: (props) => <Logo state={props.state} />,
});
