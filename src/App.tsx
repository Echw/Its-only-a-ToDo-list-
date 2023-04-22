import { Typography } from "@material-tailwind/react";
import { Layout } from "./Layout/index";
import { TaskList } from "./TaskList";
import { TaskInput } from "./TaskInput";

function App() {
  return (
    <Layout>
      <div className="bg-brown-50 flex-col absolute m-6 p-6 justify-center justify-items-center content-center rounded-2xl drop-shadow-2xl">
        <Typography variant="h1" color="gray">
          It's Only a ToDo list
        </Typography>
        <TaskInput />
        <TaskList />
      </div>
    </Layout>
  );
}

export default App;
