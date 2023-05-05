import { Typography } from "@material-tailwind/react";

interface ColumnProps {
  title: string;
  type: string;
}

export const KanbanColumn = ({ title, type }: ColumnProps) => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-center items-center gap-5">
      <Typography variant="h4">{title}</Typography>
      <div
        className="bg-red-500/10 transition hover:bg-red-500/50 h-96 w-full center flex justify-center rounded-2xl"
        id={type}
      ></div>
    </div>
  );
};
