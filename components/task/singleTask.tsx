import { useTask } from "@/contexts/task/taskContext";
import { SingleTaskProp } from "@/types/task";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function SingleTask({ task }: SingleTaskProp) {
  const { toggleTaskComplete, toggleTaskDelete } = useTask();

  return (
    <>
      <div className="bg-gray-200 rounded-md flex flex-row justify-between my-4 p-4 w-4/5 m-auto">
        <input
          type="checkbox"
          checked={task.completed}
          className="mr-12 my-auto w-4 h-4"
          id={`todo-${task.id}`}
          onChange={() => toggleTaskComplete(task.id)}
        />
        {!task.completed && (
          <div className="text-xl mr-24 text-center m-auto w-4/5">{task.task}</div>
        )}
        {task.completed && (
          <div className="line-through text-xl text-center m-auto w-4/5">
            {task.task}
          </div>
        )}
        {task.completed && (
          <MdDelete
            className="fill-red-500  text-white rounded-md h-10 w-8 my-auto ml-12"
            onClick={() => toggleTaskDelete(task.id)}
          />
        )}
      </div>
    </>
  );
}
