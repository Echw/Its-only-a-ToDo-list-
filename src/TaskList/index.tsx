import { Button } from "@material-tailwind/react";
import { HiTrash, HiPencil, HiCheck } from "react-icons/hi";

export const TaskList = () => {
  return (
    <>
      <div>
        <ul className="">
          <div className="flex justify-items-center items-center my-6 border-b-2 border-gray-300 ">
            <li className="bg-brown-50 text-gray-700  flex grow p-2">
              Your Task
            </li>
            <Button className="bg-red-400 text-brown-50 rounded-none hover:shadow-gray-400">
              <HiCheck />
            </Button>
            <Button className="bg-red-400 text-brown-50 rounded-none hover:shadow-gray-400">
              <HiPencil />
            </Button>
            <Button className="bg-red-400 text-brown-50 rounded-none hover:shadow-gray-400">
              <HiTrash />
            </Button>
          </div>
        </ul>
      </div>
    </>
  );
};
