import { DoneList } from "../../DoneList";
import { TaskInput } from "../../TaskInput";
import { TaskList } from "../../TaskList";

export const List = () => {
  return (
    <>
      <TaskInput />
      <TaskList />
      <DoneList />
    </>
  );
};
