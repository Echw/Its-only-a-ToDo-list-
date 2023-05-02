import { Typography } from "@material-tailwind/react";
import { DoneList } from "../../DoneList";
import { TaskInput } from "../../TaskInput";
import { TaskList } from "../../TaskList";

export const List = () => {
  return (
    <>
      <Typography variant="h1" color="gray">
        It's Only a ToDo list
      </Typography>
      <TaskInput />
      <TaskList />
      <DoneList />
    </>
  );
};
