import { DndContext } from "@dnd-kit/core";
import { KanbanColumn } from "../../KanbanColumn";
import { useAppContext } from "../../utils/hooks/useAppContext";

const Kanban = () => {
  const { tasks, doneTasks } = useAppContext();

  return (
    <div className="h-full flex justify-between items-stretch gap-2">
      <DndContext>
        <KanbanColumn title={"To Do"} type={"todo"} tasks={tasks} />
        <KanbanColumn title={"In Progress"} type={"progress"} tasks={[]} />
        <KanbanColumn title={"Done"} type={"done"} tasks={doneTasks} />
      </DndContext>
    </div>
  );
};

export default Kanban;
