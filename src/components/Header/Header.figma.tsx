/** Code Connect — Figma Header (1719:234) ↔ React <Header/>. */
import figma from "@figma/code-connect";
import { Header } from "./Header";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=1719-234";

figma.connect(Header, NODE, {
  props: {
    pageTitle: figma.string("pageTitle"),
    iconLeft: figma.boolean("iconLeft"),
    iconRight: figma.boolean("iconRight"),
    actionArea: figma.boolean("actionArea"),
    slotHeaderLeft: figma.instance("slotHeaderLeft"),
    slotHeaderRight: figma.instance("slotHeaderRight"),
    actionAreaSlot: figma.instance("actionAreaSlot"),
  },
  example: (props) => (
    <Header
      pageTitle={props.pageTitle}
      iconLeft={props.iconLeft}
      iconRight={props.iconRight}
      actionArea={props.actionArea}
      slotHeaderLeft={props.slotHeaderLeft}
      slotHeaderRight={props.slotHeaderRight}
      actionAreaSlot={props.actionAreaSlot}
    />
  ),
});
