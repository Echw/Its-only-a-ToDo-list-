import { Typography } from "@material-tailwind/react";
import { TaskType } from "../App";
import { Task } from "../Task";

interface TaskListProps {
  tasks: TaskType[];
}

export const DoneList = ({ tasks }: TaskListProps) => {
  return (
    <ul className="flex flex-col gap-4 my-6 border-gray-300 ">
      <Typography
        variant="h4"
        color="gray"
        className="text-gray-700 flex content-center"
      >
        Done
      </Typography>
      {tasks.map((task) => (
        <Task value={task.name} key={task.id} id={task.id} />
      ))}
    </ul>
  );
};
