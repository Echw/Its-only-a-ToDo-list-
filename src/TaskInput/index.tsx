import { Input, Button } from "@material-tailwind/react";
import { HiPlus } from "react-icons/hi";

export const TaskInput = () => {
  return (
    <>
      <form className="relative flex w-full justify-items-center items-center">
        <Input
          type="text"
          variant="standard"
          label="Add new task"
          className="flex grow p-2"
          color="gray"
          labelProps={{
            className: "text-gray-700",
          }}
        />
        <Button className="bg-red-400 text-brown-50 !absolute right-1 rounded-none hover:shadow-gray-400">
          <HiPlus />
        </Button>
      </form>
    </>
  );
};
