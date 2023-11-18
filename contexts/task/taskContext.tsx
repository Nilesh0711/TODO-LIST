import { useContext, createContext } from "react";
import { TaskDataProps } from "@/types/task";

export const TaskContext = createContext<TaskDataProps | null>(null);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within useTaskProvider");
  }
  return context;
};
