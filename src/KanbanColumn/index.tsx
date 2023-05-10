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
    <div className="h-full w-1/3   flex flex-col justify-center items-center rounded-2xl shadow-lg">
      <div className=" w-full bg-red-500 p-4 rounded-t-2xl">
        <Typography className=" text-brown-50 text-center" variant="h4">
          {title}
        </Typography>
      </div>
      <div
        className="h-full bg-brown-50 transition  w-full center flex flex-col items-center hover:bg-red-500/50"
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
