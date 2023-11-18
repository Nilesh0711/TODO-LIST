"use client";

import { useTask } from "@/contexts/task/taskContext";
import React, { useRef, useState } from "react";
import SpinnerWithCountdown from "@/components/ui/spinnerWithCountdown";

export default function AddTask() {
  const { handleAddToDo } = useTask();
  const taskData = useRef<HTMLInputElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {

    let task = taskData.current?.value;
    if (!task) return alert("Your Task is empty");
    
    // set the spinner
    setIsLoading((prev) => !prev);

    handleAddToDo(task);
    taskData.current!.value = "";

    // remove the spinner
    setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 5000);
  };

  return (
    <div className="flex flex-row">
      <input
        type="text"
        placeholder="Enter Your Task"
        className="bg-gray-200 text-black p-2 rounded-md text-xl w-auto"
        ref={taskData}
      />
      {!isLoading ? (
        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded-md ml-4 text-xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <div className="ml-5">
          <SpinnerWithCountdown />
        </div>
      )}
    </div>
  );
}
