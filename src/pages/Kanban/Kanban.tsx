import { KanbanColumn } from "../../KanbanColumn";

const Kanban = () => {
  return (
    <div className="flex justify-between items-stretch gap-2">
      <KanbanColumn title={"To Do"} type={"todo"} />
      <KanbanColumn title={"In Progress"} type={"progress"} />
      <KanbanColumn title={"Done"} type={"done"} />
    </div>
  );
};

export default Kanban;
