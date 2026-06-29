/**
 * Code Connect mapping — Figma Avatar (component-set 2289:2) ↔ React <Avatar/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { Avatar } from "./Avatar";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2289-2";

figma.connect(Avatar, NODE, {
  props: {
    size: figma.enum("Size", { XL: "xl", L: "l", M: "m", S: "s" }),
    initials: figma.string("Initials"),
  },
  example: (props) => <Avatar size={props.size} initials={props.initials} />,
});
