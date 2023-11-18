export interface TaskData {
  id: string;
  task: string;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}

export interface TaskDataProps {
  task: TaskData[];
  handleAddToDo: (task: string) => void;
  toggleTaskComplete: (id: string) => void;
  toggleTaskDelete: (id: string) => void;
}

export interface SingleTaskProp {
  task: TaskData;
}
