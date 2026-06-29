/** Code Connect — Figma List Row (1040:83) ↔ React <ListRow/>. */
import figma from "@figma/code-connect";
import { ListRow } from "./ListRow";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=1040-83";

figma.connect(ListRow, NODE, {
  props: {
    label: figma.string("Label"),
    value: figma.string("Value"),
    type: figma.enum("Type", {
      Navigation: "navigation",
      Toggle: "toggle",
      Value: "value",
      Action: "action",
      ValueOnly: "valueOnly",
    }),
    state: figma.enum("State", { Default: "default", Disabled: "disabled" }),
    icon: figma.boolean("Icon"),
    badge: figma.boolean("Badge"),
  },
  example: (props) => (
    <ListRow
      type={props.type}
      state={props.state}
      icon={props.icon}
      badge={props.badge}
      label={props.label}
      value={props.value}
    />
  ),
});
