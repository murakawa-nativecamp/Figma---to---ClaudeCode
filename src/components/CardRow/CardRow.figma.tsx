/**
 * Code Connect mapping — Figma Card Row (component-set 2529:49) ↔ React <CardRow/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { CardRow } from "./CardRow";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2529-49";

figma.connect(CardRow, NODE, {
  props: {
    media: figma.enum("media", { thumbnail: "thumbnail", avatar: "avatar", empty: "empty" }),
    title: figma.string("title"),
    subtitle: figma.string("subtitle"),
    caption: figma.string("caption"),
    showChevron: figma.boolean("showChevron"),
    showEmptySub: figma.boolean("showEmptySub"),
    emptyText: figma.string("emptyText"),
    emptySub: figma.string("emptySub"),
  },
  example: (props) => (
    <CardRow
      media={props.media}
      title={props.title}
      subtitle={props.subtitle}
      caption={props.caption}
      showChevron={props.showChevron}
      showEmptySub={props.showEmptySub}
      emptyText={props.emptyText}
      emptySub={props.emptySub}
    />
  ),
});
