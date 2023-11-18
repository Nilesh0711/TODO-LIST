import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParam = useSearchParams();
  const searchFilter = searchParam.get("task");

  return (
    <>
      <div className="flex flex-row w-4/5 m-auto justify-between mb-12 border-b-4">
        <Link
          href={"/"}
          className={`hover:underline underline-offset-8 decoration-4 decoration-sky-500 text-xl  text-center hover:text-blue-900 ${
            searchFilter === null
              ? "text-blue-500 underline underline-offset-8"
              : ""
          }`}
        >
          All
        </Link>
        <Link
          href={"/?task=active"}
          className={`hover:underline underline-offset-8 decoration-4  decoration-sky-500 text-xl text-center hover:text-blue-900 ${
            searchFilter === "active"
              ? "text-blue-500 underline underline-offset-8"
              : ""
          }`}
        >
          Active
        </Link>
        <Link
          href={"/?task=completed"}
          className={`hover:underline underline-offset-8 decoration-4 decoration-sky-500 text-xl  text-center hover:text-blue-900 ${
            searchFilter === "completed"
              ? "text-blue-500 underline underline-offset-8"
              : ""
          }`}
        >
          Completed
        </Link>
      </div>
    </>
  );
}
