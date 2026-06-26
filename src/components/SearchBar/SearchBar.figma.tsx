/**
 * Code Connect mapping — Figma SearchBar (component-set 2449:20) ↔ React <SearchBar/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { SearchBar } from "./SearchBar";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2449-20";

figma.connect(SearchBar, NODE, {
  props: {
    state: figma.enum("state", { default: "default", filled: "filled" }),
    text: figma.string("text"),
    placeholder: figma.string("placeholder"),
  },
  example: (props) => <SearchBar state={props.state} text={props.text} placeholder={props.placeholder} />,
});
