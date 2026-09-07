import Sidebar from "../components/NavBar";
import Form from "../components/Form";
import { useState } from "react";
import Aventureiro from "../assets/aventureiro.png";

export default function SystemPage() {
  const [tasks, getTasks] = useState([]);

  console.log(tasks);

  return (
    <>
      <Sidebar />
      <main className="flex min-h-full justify-center items-center flex-col bg-zinc-950 text-white ">
        <Form />

        {tasks.length === 0 ? (
          <div className="max-w-1/2 m-auto border-dashed border flex flex-col border-zinc-600 p-8 mt-8 text-center gap-2 items-center rounded-2xl">
            <img src={Aventureiro} alt="Aventureiro ocioso" className="w-2xs" />
            <p className="font-monospaced text-sm text-zinc-500 font-light">
              Nenhuma tarefa adiconada
            </p>
            <button className="bg-indigo-950 text-white rounded-xl p-2 font-bold text-2xl w-full transition-colors ease-in-out duration-300 mt-1 hover:bg-blue-900">
              Adicione sua primeira tarefa
            </button>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
