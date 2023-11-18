import AddTask from "@/components/task/addTask";
import ShowTask from "@/components/task/showTask";

export default function Home() {
  return (
    <div className="flex flex-col items-center my-16">
      <div className="text-gray-700 text-2xl">
        TODO MADE USING NEXT+TYPESCRIPT
      </div>
      <div className="bg-gray-600 w-3/5 h-[1.1px] my-12" />
      <AddTask />
      <div className="bg-gray-600 w-3/5 h-[1.1px] my-12" />
      <ShowTask />
    </div>
  );
}
