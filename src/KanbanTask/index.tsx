import { GrDrag } from "react-icons/gr";
import { TaskType } from "../utils/types/TaskType";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface KanbanTaskProps {
  task: TaskType;
}

export const KanbanTask = ({ task }: KanbanTaskProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className="bg-brown-50 m-2 p-2 flex w-3/4 center justify-center items-center rounded-2xl relative"
      ref={setNodeRef}
      style={style}
    >
      {task.name}
      <GrDrag
        className="absolute top-4 right-2 text-red-500"
        {...listeners}
        {...attributes}
      />
    </div>
  );
};
