import { Typography } from "@material-tailwind/react";
import { Task } from "../Task";
import { useAppContext } from "../utils/hooks/useAppContext";

export const DoneList = () => {
  const {
    tasks,
    doneTasks,
    setTasks,
    setDoneTasks,
    saveDoneTasksInLocalStorage,
    saveTasksInLocalStorage,
  } = useAppContext();
  const onUndoneStateChange = (value: string, id: string) => {
    const newDoneTasks = doneTasks.filter((task) => {
      return task.id !== id;
    });
    setTasks([...tasks, { title: value, id: id, isDone: false }]);
    saveTasksInLocalStorage([
      ...tasks,
      { title: value, id: id, isDone: false },
    ]);
    setDoneTasks(newDoneTasks);
    saveDoneTasksInLocalStorage(newDoneTasks);
  };
  const onDeleteTask = (id: string) => {
    const newDoneTasks = doneTasks.filter((task) => {
      return task.id !== id;
    });
    setDoneTasks(newDoneTasks);
    saveDoneTasksInLocalStorage(newDoneTasks);
  };

  return (
    <ul className="flex flex-col gap-4 my-6 border-gray-300 ">
      <Typography
        variant="h4"
        color="gray"
        className="text-gray-700 flex content-center"
      >
        Done
      </Typography>
      {doneTasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onUndoneStateChange={onUndoneStateChange}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};
