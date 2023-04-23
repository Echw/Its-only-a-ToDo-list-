import { Typography } from "@material-tailwind/react";
import { Layout } from "./Layout/index";
import { TaskList } from "./TaskList";
import { TaskInput } from "./TaskInput";
import { useState } from "react";
import { DoneList } from "./DoneList";

export type TaskType = {
  name: string;
  id: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [doneTasks, setDoneTasks] = useState<TaskType[]>([]);

  return (
    <Layout>
      <div className="bg-brown-50 flex flex-col gap-6 m-6 p-6 justify-center justify-items-center content-center rounded-2xl drop-shadow-2xl">
        <Typography variant="h1" color="gray">
          It's Only a ToDo list
        </Typography>
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          doneTasks={doneTasks}
          setDoneTasks={setDoneTasks}
        />
        <DoneList tasks={doneTasks} />
      </div>
    </Layout>
  );
}

export default App;
