import { Typography } from "@material-tailwind/react";
import { Layout } from "./Layout/index";
import { TaskList } from "./TaskList";
import { TaskInput } from "./TaskInput";
import { DoneList } from "./DoneList";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <Layout>
      <div className="bg-brown-50 flex flex-row gap-6 m-6 justify-center justify-items-center content-center overflow-hidden rounded-2xl drop-shadow-2xl">
        <Sidebar
          open={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <div className="flex flex-col gap-6 m-6 p-6 justify-center justify-items-center content-center">
          <Typography variant="h1" color="gray">
            It's Only a ToDo list
          </Typography>
          <TaskInput />
          <TaskList />
          <DoneList />
        </div>
      </div>
    </Layout>
  );
}

export default App;
