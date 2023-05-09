import { Typography } from "@material-tailwind/react";
import { Task } from "./../Task/index";
import { useAppContext } from "../utils/hooks/useAppContext";

export const TaskList = () => {
  const {
    tasks,
    doneTasks,
    setTasks,
    setDoneTasks,
    saveDoneTasksInLocalStorage,
    saveTasksInLocalStorage,
  } = useAppContext();

  const onTaskChange = (value: string, id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.title = value;
      }
      return task;
    });
    setTasks(newTasks);
    saveTasksInLocalStorage(newTasks);
  };

  const onDoneStateChange = (value: string, id: string) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
    saveTasksInLocalStorage(newTasks);
    setDoneTasks([...doneTasks, { title: value, id: id, isDone: true }]);
    saveDoneTasksInLocalStorage([
      ...doneTasks,
      { title: value, id: id, isDone: true },
    ]);
  };

  const onDeleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
    saveTasksInLocalStorage(newTasks);
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
          task={task}
          key={task.id}
          onChange={onTaskChange}
          onDoneStateChange={onDoneStateChange}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};
