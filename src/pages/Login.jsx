import toast, { Toaster } from "react-hot-toast";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [emailUserInput, setEmail] = useState("");
  const [passwordUserInput, setPassword] = useState("");

  const navigate = useNavigate();

  const userCredentials = {
    email: "jorge@gmail.com",
    password: "12345678",
  };

  const emailHandlerEvent = (e) => {
    setEmail(e.target.value);
    console.log(emailUserInput);
  };

  const passwordHandlerEvent = (e) => {
    setPassword(e.target.value);
    console.log(passwordUserInput);
  };

  function validate(e) {
    e.preventDefault();

    const userData = {
      email: emailUserInput,
      password: passwordUserInput,
    };

    if (
      userData.email == userCredentials.email &&
      userData.password == userCredentials.password
    ) {
      toast("Acesso liberado!", {
        icon: "👋",
        position: "top-right",
        duration: 800,
      });
      setTimeout(() => {
        navigate("/system", { replace: true });
      }, 850);
    } else {
      toast("Acesso negado!", {
        icon: <X />,
        position: "top-right",
      });
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-4xl font-main text-zinc-200">
        Hello World!
      </h1>
      <p className="text-center text-sm text-zinc-500 font-monospaced">
        Faça login para acessar o sistema.
      </p>
      <form
        onSubmit={validate}
        className="flex flex-col min-w-1/2 bg-zinc-950 mt-4 p-6 gap-2 rounded-2xl text-zinc-500 border border-zinc-800"
      >
        <label htmlFor="emailInput">Email</label>
        <input
          value={emailUserInput}
          onChange={emailHandlerEvent}
          type="email"
          name="emailInput"
          id="emailInput"
          placeholder="exemplo@gmail.com"
          required
          className="border outline-none border-zinc-600 p-1.25 rounded-lg min-w-3/4 bg-zinc-800 transition-colors duration-200 ease-in-out text-zinc-300 placeholder:text-zinc-500 focus:border-indigo-900 hover:border-indigo-900"
        />

        <label htmlFor="passwordInput">Senha</label>
        <input
          value={passwordUserInput}
          onChange={passwordHandlerEvent}
          type="password"
          name="passwordInput"
          id="passwordInput"
          placeholder="123456"
          className="border outline-none border-zinc-600 p-1.25 rounded-lg min-w-3/4 bg-zinc-800 transition-colors duration-200 ease-in-out text-zinc-300 placeholder:text-zinc-500 focus:border-indigo-900 hover:border-indigo-900"
          required
        />

        <button className="bg-indigo-950 text-white p-1 rounded-2xl font-bold text-2xl mt-2">
          Entrar
        </button>
        <Toaster />
      </form>
    </div>
  );
}
