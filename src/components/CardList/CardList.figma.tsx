/**
 * Code Connect mapping — Figma CardList (component-set 2530:215) ↔ React <CardList/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { CardList } from "./CardList";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2530-215";

figma.connect(CardList, NODE, {
  props: {
    count: figma.enum("count", { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6 }),
    children: figma.children("*"),
  },
  example: (props) => <CardList count={props.count}>{props.children}</CardList>,
});
