/**
 * Code Connect mapping — Figma Status Badge (component-set 2732:246) ↔ React <StatusBadge/>.
 * Publish with: npx figma connect publish. See docs/code-connect.md.
 */
import figma from "@figma/code-connect";
import { StatusBadge } from "./StatusBadge";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2732-246";

figma.connect(StatusBadge, NODE, {
  props: {
    label: figma.string("Label"),
    status: figma.enum("Status", {
      Reservation: "reservation",
      Now: "now",
      Live: "live",
    }),
  },
  example: (props) => <StatusBadge status={props.status} label={props.label} />,
});
