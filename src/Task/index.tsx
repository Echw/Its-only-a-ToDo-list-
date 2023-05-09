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
import { IoMdClose } from "react-icons/io";

import DatePicker from "react-datepicker";
import { TaskType } from "../utils/types/TaskType";
import { useAppContext } from "../utils/hooks/useAppContext";

interface TaskProps {
  task: TaskType;
  onChange?: (value: string, id: string) => void;
  onDoneStateChange?: (value: string, id: string) => void;
  onUndoneStateChange?: (value: string, id: string) => void;
  onDeleteTask?: (id: string) => void;
}

export const Task = ({
  task,
  onChange,
  onDoneStateChange,
  onUndoneStateChange,
  onDeleteTask,
}: TaskProps) => {
  const { tasks, setTasks, saveTasksInLocalStorage } = useAppContext();

  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(task.title);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleOpen = () => setOpen((cur) => !cur);

  const onDateAdd = () => {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        t.start = startDate || undefined;
      }
      return t;
    });
    setTasks(newTasks);
    saveTasksInLocalStorage(newTasks);
  };

  return (
    <>
      <li className="bg-brown-50 text-gray-700 flex grow justify-between items-stretch">
        <Typography variant="paragraph">{task.title}</Typography>
        <div>
          {!task.isDone && (
            <>
              <Button
                variant="text"
                onClick={() => {
                  if (onDoneStateChange) {
                    onDoneStateChange(task.title, task.id);
                  }
                }}
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
            </>
          )}
          {task.isDone && (
            <Button
              variant="text"
              onClick={() => {
                if (onUndoneStateChange) {
                  onUndoneStateChange(task.title, task.id);
                }
              }}
              className="bg-brown-50 text-red-400 rounded-none hover:bg-brown-100"
            >
              <IoMdClose />
            </Button>
          )}
          <Button
            variant="text"
            onClick={() => {
              if (onDeleteTask) {
                onDeleteTask(task.id);
              }
            }}
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
        <Card className="mx-auto w-full max-w-[24rem]  bg-brown-50">
          <CardHeader className="mb-4 grid h-28 place-items-center bg-gray-800 ">
            <Typography variant="h3" className="text-brown-50">
              Edit your task
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
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              onClick={() => {
                handleOpen();
                onDateAdd();
                if (onChange) {
                  onChange(update, task.id);
                }
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
