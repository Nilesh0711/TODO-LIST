"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { TaskContext } from "@/contexts/task/taskContext";
import { TaskData } from "@/types/task";

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [task, setTask] = useState<TaskData[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedTask = localStorage.getItem("task") || "[]";
      setTask(JSON.parse(storedTask) as TaskData[]);
    }
  }, []);

  const handleAddToDo = (task: string) => {
    setTask((prev: TaskData[]) => {
      const newTask: TaskData[] = [
        {
          completed: false,
          task,
          createdAt: new Date(),
          id: Math.random().toString(),
          updatedAt: new Date(),
        },
        ...prev,
      ];

      localStorage.setItem("task", JSON.stringify(newTask));
      return newTask;
    });
  };

  const toggleTaskComplete = (id: string) => {
    setTask((prev: TaskData[]) => {
      const newTasks = prev.map((task: TaskData) => {
        if (task.id === id) return { ...task, completed: !task.completed };
        return task;
      });
      return newTasks;
    });
  };

  const toggleTaskDelete = (id: string) => {
    setTask((prev: TaskData[]) => {
      const newTask: TaskData[] = prev.filter(
        (task: TaskData) => task.id !== id
      );
      return newTask;
    });
  };

  return (
    <TaskContext.Provider
      value={{ handleAddToDo, task, toggleTaskComplete, toggleTaskDelete }}
    >
      {children}
    </TaskContext.Provider>
  );
}
