/**
 * Code Connect mapping — Figma Lesson Card (component 2733:2965) ↔ React <LessonCard/>.
 * Publish with: npx figma connect publish.
 */
import figma from "@figma/code-connect";
import { LessonCard } from "./LessonCard";

const NODE = "https://www.figma.com/design/DKl4vZ6OAtXYhuvMHbWkRZ/Design-System---APP?node-id=2733-2965";

figma.connect(LessonCard, NODE, {
  props: {
    date: figma.string("date"),
    teacher: figma.string("teacher"),
    notes: figma.string("notes"),
    showMenu: figma.boolean("showMenu"),
    showButton: figma.boolean("showButton"),
    showMaterial: figma.boolean("showMaterial"),
    showNotes: figma.boolean("showNotes"),
    showAction: figma.boolean("showAction"),
  },
  example: (props) => (
    <LessonCard
      date={props.date}
      teacher={props.teacher}
      notes={props.notes}
      showMenu={props.showMenu}
      showButton={props.showButton}
      showMaterial={props.showMaterial}
      showNotes={props.showNotes}
      showAction={props.showAction}
    />
  ),
});
