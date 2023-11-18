"use client";

import { useTask } from "@/contexts/task/taskContext";
import React, { useRef } from "react";

export default function AddTask() {
  const { handleAddToDo } = useTask();
  const taskData = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    let task = taskData.current?.value
    if (!task) return alert("Your Task is empty")
    handleAddToDo(task);
    
  };

  return (
    <div className="flex flex-row">
      <input
        type="text"
        placeholder="Enter Your Task"
        className="bg-gray-200 text-black p-2 rounded-md text-xl w-auto"
        ref={taskData}
      />
      <button
        type="button"
        className="bg-green-500 text-white p-2 rounded-md ml-4 text-xl"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
