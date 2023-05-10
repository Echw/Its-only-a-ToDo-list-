import { Button } from "@material-tailwind/react";
import { DoneList } from "../../DoneList";
import { TaskInput } from "../../TaskInput";
import { TaskList } from "../../TaskList";
import { useAppContext } from "../../utils/hooks/useAppContext";

export const List = () => {
  const {
    setTasks,
    setDoneTasks,
    saveDoneTasksInLocalStorage,
    saveTasksInLocalStorage,
  } = useAppContext();

  const clearTasks = () => {
    setDoneTasks([]);
    setTasks([]);
    saveDoneTasksInLocalStorage([]);
    saveTasksInLocalStorage([]);
  };

  return (
    <>
      <TaskInput />
      <TaskList />
      <DoneList />
      <Button
        onClick={() => {
          clearTasks();
        }}
        fullWidth
        className="bg-red-400 text-brown-50 rounded-none shadow-none hover:bg-gray-700 hover:shadow-none"
      >
        Remove all tasks
      </Button>
    </>
  );
};
