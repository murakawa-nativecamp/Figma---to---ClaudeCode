/** Code Connect — Figma History Row (2776:1322) ↔ React <HistoryRow/>. */
import figma from "@figma/code-connect";
import { HistoryRow } from "./HistoryRow";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2776-1322";

figma.connect(HistoryRow, NODE, {
  props: {
    name: figma.string("name"),
    timestamp: figma.string("timestamp"),
    message: figma.string("message"),
    showTimestamp: figma.boolean("showTimestamp"),
    showMessage: figma.boolean("showMessage"),
    showTrailing: figma.boolean("showTrailing"),
    type: figma.enum("Type", {
      Message: "message",
      Audio: "audio",
      Memo: "memo",
      ChatLog: "chatLog",
    }),
  },
  example: (props) => (
    <HistoryRow
      type={props.type}
      name={props.name}
      timestamp={props.timestamp}
      message={props.message}
      showTimestamp={props.showTimestamp}
      showMessage={props.showMessage}
      showTrailing={props.showTrailing}
    />
  ),
});
