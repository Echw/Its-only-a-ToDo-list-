import { TaskType } from "../App";
import { Task } from "./../Task/index";

interface TaskListProps {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
}

export const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  const onTaskChange = (value: string, id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.name = value;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <ul className="flex flex-col gap-4 my-6 border-gray-300 ">
      {tasks.map((task) => (
        <Task
          value={task.name}
          key={task.id}
          id={task.id}
          onChange={onTaskChange}
        />
      ))}
    </ul>
  );
};
