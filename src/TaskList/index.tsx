import { Typography } from "@material-tailwind/react";
import { Task } from "./../Task/index";
import { useAppContext } from "../utils/hooks/useAppContext";

export const TaskList = () => {
  const { tasks, doneTasks, setTasks, setDoneTasks } = useAppContext();

  const onTaskChange = (value: string, id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.name = value;
      }
      return task;
    });
    setTasks(newTasks);
  };
  const onDoneStateChange = (value: string, id: string) => {
    if (setDoneTasks) {
      const doneTask = tasks.filter((task) => {
        return task.id !== id;
      });
      setTasks(doneTask);
      setDoneTasks([...doneTasks, { name: value, id: id }]);
    }
  };
  return (
    <ul className="flex flex-col gap-4 my-6 border-gray-300 ">
      <Typography
        variant="h4"
        color="gray"
        className="text-gray-700 flex content-center"
      >
        To Do
      </Typography>
      {tasks.map((task) => (
        <Task
          value={task.name}
          key={task.id}
          id={task.id}
          onChange={onTaskChange}
          onDoneStateChange={onDoneStateChange}
        />
      ))}
    </ul>
  );
};
