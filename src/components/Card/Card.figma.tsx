/**
 * Code Connect mapping — Figma Card (component-set 2524:2) ↔ React <Card/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { Card } from "./Card";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2524-2";

figma.connect(Card, NODE, {
  props: {
    type: figma.enum("type", { vertical: "vertical", horizontal: "horizontal" }),
    media: figma.boolean("media"),
    actions: figma.boolean("actions"),
    title: figma.string("title"),
    body: figma.string("body"),
    value: figma.string("value"),
    unit: figma.string("unit"),
    caption: figma.string("caption"),
  },
  example: (props) => (
    <Card
      type={props.type}
      media={props.media}
      actions={props.actions}
      title={props.title}
      body={props.body}
      value={props.value}
      unit={props.unit}
      caption={props.caption}
    />
  ),
});
