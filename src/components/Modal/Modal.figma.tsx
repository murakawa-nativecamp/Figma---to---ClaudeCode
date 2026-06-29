/**
 * Code Connect mapping — Figma Modal (frame 2371:83) ↔ React <Modal/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { Modal } from "./Modal";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2371-83";

figma.connect(Modal, NODE, {
  props: {
    variant: figma.enum("variant", {
      dialog: "dialog",
      modal: "modal",
      bottomSheet: "bottomSheet",
    }),
    title: figma.string("title"),
    hasActionButton: figma.boolean("hasActionButton"),
  },
  example: (props) => (
    <Modal variant={props.variant} title={props.title} hasActionButton={props.hasActionButton} />
  ),
});
