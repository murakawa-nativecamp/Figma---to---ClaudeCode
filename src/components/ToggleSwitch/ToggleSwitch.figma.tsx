/**
 * Code Connect mapping — Figma Toggle Switch (component-set 1031:8) ↔ React <ToggleSwitch/>.
 */
import figma from "@figma/code-connect";
import { ToggleSwitch } from "./ToggleSwitch";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=1031-8";

figma.connect(ToggleSwitch, NODE, {
  props: {
    state: figma.enum("state", {
      off: "off",
      on: "on",
      disabled: "disabled",
    }),
  },
  example: (props) => <ToggleSwitch state={props.state} />,
});
