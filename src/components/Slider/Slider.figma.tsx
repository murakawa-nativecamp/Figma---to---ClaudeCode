/**
 * Code Connect mapping — Figma Slider (node 2294:6) ↔ React <Slider/>.
 */
import figma from "@figma/code-connect";
import { Slider } from "./Slider";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2294-6";

figma.connect(Slider, NODE, {
  props: {
    disabled: figma.boolean("disabled"),
  },
  example: (props) => <Slider value={50} disabled={props.disabled} />,
});
