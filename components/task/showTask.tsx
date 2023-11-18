"use client";
import React from "react";

import SingleTask from "@/components/task/singleTask";
import Navbar from "@/components/navbar/navbar";
import { useTask } from "@/contexts/task/taskContext";
import { TaskData } from "@/types/task";
import { useSearchParams } from "next/navigation";

export default function ShowTask() {
  const { task } = useTask();

  const searchParam = useSearchParams();
  const searchFilter = searchParam.get("task");

  let filterTask: TaskData[] = task;

  switch (searchFilter) {
    case "active":
      filterTask = filterTask.filter((t: TaskData) => !t.completed);
      break;
    case "completed":
      filterTask = filterTask.filter((t: TaskData) => t.completed);
      break;
  }

  return (
    <div className="w-full">
      <Navbar />
      <li className="list-none">
        {filterTask.map((e: TaskData) => {
          return (
            <ul key={e.id}>
              <SingleTask task={e} />
            </ul>
          );
        })}
      </li>
    </div>
  );
}
