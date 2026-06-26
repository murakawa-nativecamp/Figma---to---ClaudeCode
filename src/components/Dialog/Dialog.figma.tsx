/**
 * Code Connect mapping — Figma Dialog (component-set 2337:50) ↔ React <Dialog/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { Dialog } from "./Dialog";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2337-50";

figma.connect(Dialog, NODE, {
  props: {
    type: figma.enum("type", { default: "default", destructive: "destructive" }),
    title: figma.string("title"),
    body: figma.string("body"),
    showBody: figma.boolean("showBody"),
    showCancel: figma.boolean("showCancel"),
    showIcon: figma.boolean("showIcon"),
    showInput: figma.boolean("showInput"),
    showNotes: figma.boolean("showNotes"),
    notes: figma.string("notes"),
  },
  example: (props) => (
    <Dialog
      type={props.type}
      title={props.title}
      body={props.body}
      showBody={props.showBody}
      showCancel={props.showCancel}
      showIcon={props.showIcon}
      showInput={props.showInput}
      showNotes={props.showNotes}
      notes={props.notes}
    />
  ),
});
