import figma from "@figma/code-connect";
import { Badge } from "./Badge";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2156-5";

figma.connect(Badge, NODE, {
  props: {
    type: figma.enum("Type", { Number: "number", Dot: "dot", New: "new" }),
    count: figma.string("Count"),
  },
  example: (props) => <Badge type={props.type} count={props.count} />,
});
