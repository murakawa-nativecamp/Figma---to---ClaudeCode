/**
 * Code Connect mapping — Figma Stepper (component-set 2295:18) ↔ React <Stepper/>.
 */
import figma from "@figma/code-connect";
import { Stepper } from "./Stepper";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2295-18";

figma.connect(Stepper, NODE, {
  props: {
    state: figma.enum("state", {
      default: "default",
      disabled: "disabled",
    }),
  },
  example: (props) => <Stepper state={props.state} value={1} />,
});
