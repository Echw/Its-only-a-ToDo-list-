import { createContext, ReactNode, useState } from "react";
import { TaskType } from "../utils/types/TaskType";

type AppContextType = {
  tasks: TaskType[];
  doneTasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  setDoneTasks: (tasks: TaskType[]) => void;
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
});

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [doneTasks, setDoneTasks] = useState<TaskType[]>([]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        doneTasks,
        setTasks,
        setDoneTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
