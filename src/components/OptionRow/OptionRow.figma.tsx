/** Code Connect — Figma Option Row (2543:18) ↔ React <OptionRow/>. */
import figma from "@figma/code-connect";
import { OptionRow } from "./OptionRow";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2543-18";

figma.connect(OptionRow, NODE, {
  props: {
    title: figma.string("title"),
    description: figma.string("description"),
    showDescription: figma.boolean("showDescription"),
    state: figma.enum("State", { Default: "default", Selected: "selected" }),
  },
  example: (props) => (
    <OptionRow
      state={props.state}
      title={props.title}
      description={props.description}
      showDescription={props.showDescription}
    />
  ),
});
