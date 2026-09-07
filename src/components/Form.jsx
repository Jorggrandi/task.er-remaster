import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { XCircle, CheckCircle2Icon } from "lucide-react";

export default function Form() {
  const [tarefaInput, setTarefa] = useState("");

  const [taskList, addTaskInList] = useState([]);

  const setTaskInput = (e) => {
    setTarefa(e.target.value);
  };

  const submitHandlerEvent = (e) => {
    e.preventDefault();
    console.log(tarefaInput);

    if (tarefaInput === "") {
      console.log("Tarefas vazias não entram aqui");
      toast("Adicione um valor válido", {
        icon: <XCircle />,
        position: "top-right",
        duration: 1100,
      });
      return;
    } else {
      addTaskInList((atual) => [...atual, tarefaInput]);
      toast("Tarefa adicinada!", {
        icon: <CheckCircle2Icon />,
        position: "top-right",
        duration: 1100,
      });
      setTarefa("");
      localStorage.setItem(tarefaInput, tarefaInput);
    }
  };

  useEffect(() => console.log(taskList), [taskList]);

  return (
    <>
      <form
        className="border border-zinc-800  p-5 mt-4 rounded-xl gap-4 flex flex-row min-w-3/4 max-w-3/4"
        id="formTask"
        onSubmit={submitHandlerEvent}
      >
        <input
          type="text"
          name="taskInput"
          id="taskInput"
          onChange={setTaskInput}
          value={tarefaInput}
          placeholder="Qual a sua tarefa?"
          className="border outline-none border-zinc-600 p-2 rounded-lg min-w-3/4 bg-zinc-900 transition-colors duration-200 ease-in-out text-zinc-300 placeholder:text-zinc-500 focus:border-indigo-900 hover:border-indigo-900"
        />
        <button className="bg-indigo-950 text-white rounded-xl font-bold text-2xl w-1/4 transition-colors ease-in-out duration-300 hover:bg-blue-900">
          Adicionar
        </button>
      </form>
      <Toaster />
    </>
  );
}
