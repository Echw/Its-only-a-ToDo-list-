import { Typography } from "@material-tailwind/react";
import { Task } from "../Task";
import { useAppContext } from "../utils/hooks/useAppContext";

export const DoneList = () => {
  const { doneTasks } = useAppContext();
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
        <Task value={task.name} key={task.id} id={task.id} />
      ))}
    </ul>
  );
};
