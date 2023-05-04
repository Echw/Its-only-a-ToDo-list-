import { createContext, ReactNode, useEffect, useState } from "react";
import { TaskType } from "../utils/types/TaskType";

type AppContextType = {
  tasks: TaskType[];
  doneTasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  setDoneTasks: (tasks: TaskType[]) => void;
  saveTasksInLocalStorage: (tasks: TaskType[]) => void;
  saveDoneTasksInLocalStorage: (tasks: TaskType[]) => void;
};

interface AppContextProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType>({
  get tasks(): TaskType[] {
    throw new Error("AppContext not defined");
  },
  get doneTasks(): TaskType[] {
    throw new Error("AppContext not defined");
  },
  setTasks(): TaskType[] {
    throw new Error("AppContext not defined");
  },
  setDoneTasks(): TaskType[] {
    throw new Error("AppContext not defined");
  },
  saveTasksInLocalStorage(): TaskType[] {
    throw new Error("AppContext not defined");
  },
  saveDoneTasksInLocalStorage(): TaskType[] {
    throw new Error("AppContext not defined");
  },
});

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [doneTasks, setDoneTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const taskItem = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    ) as TaskType[];
    setTasks(taskItem);

    const taskDoneItem = JSON.parse(
      localStorage.getItem("tasks-done") || "[]"
    ) as TaskType[];
    setDoneTasks(taskDoneItem);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks-done", JSON.stringify(doneTasks));
  // }, [doneTasks]);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const saveTasksInLocalStorage = (taskList: TaskType[]) => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  };
  const saveDoneTasksInLocalStorage = (taskList: TaskType[]) => {
    localStorage.setItem("tasks-done", JSON.stringify(taskList));
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        doneTasks,
        setTasks,
        setDoneTasks,
        saveTasksInLocalStorage,
        saveDoneTasksInLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
