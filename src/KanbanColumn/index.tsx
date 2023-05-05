import { Typography } from "@material-tailwind/react";
import { KanbanTask } from "../KanbanTask";
import { TaskType } from "../utils/types/TaskType";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  title: string;
  type: string;
  tasks: TaskType[];
}

export const KanbanColumn = ({ title, type, tasks }: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: type,
  });

  return (
    <div className="h-full w-1/3 flex flex-col justify-center items-center gap-5">
      <Typography variant="h4">{title}</Typography>
      <div
        className="h-full bg-red-500/10 transition hover:bg-red-500/50 w-full center flex flex-col items-center rounded-2xl"
        id={type}
        ref={setNodeRef}
      >
        {tasks.map((task) => {
          return <KanbanTask task={task} key={task.id} />;
        })}
      </div>
    </div>
  );
};
