/** Code Connect — Figma Accordion (2427:12) ↔ React <Accordion/>. */
import figma from "@figma/code-connect";
import { Accordion } from "./Accordion";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2427-12";

figma.connect(Accordion, NODE, {
  props: {
    title: figma.string("title"),
    body: figma.string("body"),
    state: figma.enum("State", { Collapsed: "collapsed", Expanded: "expanded" }),
  },
  example: (props) => <Accordion state={props.state} title={props.title} body={props.body} />,
});
