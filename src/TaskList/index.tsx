import { TaskType } from "../App";
import { Task } from "./../Task/index";

interface TaskListProps {
  tasks: TaskType[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <ul className="flex flex-col gap-4 my-6 border-gray-300 ">
      {tasks.map((task) => (
        <Task value={task.name} key={task.id} />
      ))}
    </ul>
  );
};
