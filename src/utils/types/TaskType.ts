export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
  inProgress?: boolean;
  start?: Date;
};
