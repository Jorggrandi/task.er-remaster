import { Link } from "react-router-dom";
import { CircleCheckBig, ChartColumnBig, CodeXml } from "lucide-react";
export default function Sidebar() {
  return (
    <header className="flex flex-col max-w-4/3 bg-zinc-950 border-zinc-700 border-b p-4 items-center">
      <h1 className="font-bold text-4xl font-main text-zinc-200 mb-3">
        Task.err
      </h1>
      <ul className="flex text-zinc-500 gap-1 border-zinc-700 border p-4 rounded-xl min-w-3/4">
        <li className=" flex flex-row w-1/3 gap-3 justify-center items-center p-2 text-base font-monospaced text-zinc-500 transition-colors duration-250 ease-linear  hover:scale-105 hover:text-zinc-300 hover:border-b-zinc-300">
          <ChartColumnBig size={25} />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className=" flex flex-row w-1/3 gap-3 justify-center items-center p-2 text-base font-monospaced text-zinc-500 transition-colors duration-250 ease-linear  hover:scale-105 hover:text-zinc-300 hover:border-b-zinc-300">
          <CircleCheckBig size={25} />
          <Link to="/system">Tasker</Link>
        </li>
        <li className=" flex flex-row w-1/3 gap-3 justify-center items-center p-2 text-base font-monospaced text-zinc-500 transition-colors duration-250 ease-linear  hover:scale-105 hover:text-zinc-300 hover:border-b-zinc-300">
          <CodeXml size={25} />
          <Link to="/sobre">.dev</Link>
        </li>
      </ul>
    </header>
  );
}
