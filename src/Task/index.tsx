import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { HiTrash, HiPencil, HiCheck } from "react-icons/hi";

interface TaskProps {
  value: string;
  id: string;
  onChange: (value: string, id: string) => void;
}

export const Task = ({ value, id, onChange }: TaskProps) => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(value);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
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
            onClick={handleOpen}
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
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none min-w-[50%]"
      >
        <Card className="mx-auto w-full max-w-[24rem] rounded-none bg-brown-50">
          <CardHeader className="mb-4 grid h-28 place-items-center bg-gray-700 rounded-none">
            <Typography variant="h3" className="text-brown-50">
              Change your task
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="text"
              variant="standard"
              label="Change your Task"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              className="flex grow p-2 "
              color="gray"
              labelProps={{
                className: "text-gray-200 placeholder:text-gray-200 ",
              }}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              onClick={() => {
                handleOpen();
                onChange(update, id);
              }}
              fullWidth
              className="bg-red-400 text-brown-50 rounded-none shadow-none hover:bg-gray-700 hover:shadow-none"
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
