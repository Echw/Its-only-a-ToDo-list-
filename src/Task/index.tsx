import { Button, Typography } from "@material-tailwind/react";
import { HiTrash, HiPencil, HiCheck } from "react-icons/hi";

interface TaskProps {
  value: string;
}

export const Task = ({ value }: TaskProps) => {
  return (
    <li className="bg-brown-50 text-gray-700 flex grow justify-between items-stretch">
      <Typography variant="paragraph">{value}</Typography>
      <div>
        <Button
          variant="text"
          className="bg-brown-50 text-red-400 rounded-none hover:bg-brown-100"
        >
          <HiCheck />
        </Button>
        <Button
          variant="text"
          className="bg-brown-50 text-red-400 rounded-none hover:bg-brown-100"
        >
          <HiPencil />
        </Button>
        <Button
          variant="text"
          className="bg-brown-50 text-red-400 rounded-none hover:bg-brown-100"
        >
          <HiTrash />
        </Button>
      </div>
    </li>
  );
};
