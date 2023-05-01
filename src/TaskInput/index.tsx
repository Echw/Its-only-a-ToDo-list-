/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useAppContext } from "../utils/hooks/useAppContext";

export const TaskInput = () => {
  const { tasks, setTasks } = useAppContext();
  const [task, setTask] = useState("");
  const onChange = ({ target }: any) => {
    setTask(target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setTasks([...tasks, { name: task, id: new Date().toString() }]);
    setTask("");
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="relative flex w-full justify-items-center items-center"
      >
        <Input
          type="text"
          variant="standard"
          label="Add new task"
          value={task}
          onChange={onChange}
          className="flex grow p-2 "
          color="gray"
          labelProps={{
            className: "text-gray-200 placeholder:text-gray-200 ",
          }}
        />
        <Button
          type="submit"
          disabled={!task}
          className="bg-red-400 text-brown-50 !absolute right-1 rounded-none shadow-none hover:bg-gray-700 hover:shadow-none"
        >
          <HiPlus />
        </Button>
      </form>
    </>
  );
};
