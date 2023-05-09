import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { KanbanColumn } from "../../KanbanColumn";
import { useAppContext } from "../../utils/hooks/useAppContext";

const Kanban = () => {
  const {
    tasks,
    doneTasks,
    setTasks,
    setDoneTasks,
    saveDoneTasksInLocalStorage,
    saveTasksInLocalStorage,
  } = useAppContext();

  const onDoneStateChange = (taskId: string) => {
    const foundTask = tasks.find((task) => {
      return task.id === taskId;
    });
    if (!foundTask) {
      return;
    }
    foundTask.isDone = true;
    setDoneTasks([...doneTasks, foundTask]);
    saveDoneTasksInLocalStorage([...doneTasks, foundTask]);
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(newTasks);
    saveTasksInLocalStorage(newTasks);
  };

  const onProgressStateChange = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = false;
        task.inProgress = true;
      }
      return task;
    });
    setTasks(newTasks);
    saveTasksInLocalStorage(newTasks);
  };

  const onProgressDoneStateChange = (taskId: string) => {
    const foundDoneTask = doneTasks.find((task) => {
      return task.id === taskId;
    });
    if (!foundDoneTask) {
      return;
    }
    foundDoneTask.isDone = false;
    foundDoneTask.inProgress = true;
    setDoneTasks([...doneTasks, foundDoneTask]);
    saveDoneTasksInLocalStorage([...doneTasks, foundDoneTask]);
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(newTasks);
    saveTasksInLocalStorage(newTasks);
  };

  const onUndoneStateChange = (taskId: string) => {
    const foundTask = doneTasks.find((task) => {
      return task.id === taskId;
    });
    if (!foundTask) {
      return;
    }
    foundTask.isDone = false;
    setTasks([...tasks, foundTask]);
    saveTasksInLocalStorage([...tasks, foundTask]);
    const newTasks = doneTasks.filter((task) => {
      return task.id !== taskId;
    });
    setDoneTasks(newTasks);
    saveDoneTasksInLocalStorage(newTasks);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over?.id === "done") {
      onDoneStateChange(active.id as string);
    }
    if (over?.id === "todo") {
      onUndoneStateChange(active.id as string);
    }
    if (over?.id === "progress") {
      onProgressStateChange(active.id as string);
    }
  };

  return (
    <div className="h-full flex justify-between items-stretch gap-2">
      <DndContext onDragEnd={handleDragEnd}>
        <KanbanColumn
          title={"To Do"}
          type={"todo"}
          tasks={tasks.filter((task) => !task.inProgress)}
        />
        <KanbanColumn
          title={"In Progress"}
          type={"progress"}
          tasks={tasks.filter((task) => task.inProgress)}
        />
        <KanbanColumn title={"Done"} type={"done"} tasks={doneTasks} />
      </DndContext>
    </div>
  );
};

export default Kanban;
