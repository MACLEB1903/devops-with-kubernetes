import { useRef, useState } from "react";
import { useTodoStore } from "../store/todoStore";

const VITE_TODOS_FETCH_URL = import.meta.env.VITE_TODOS_FETCH_URL;
export default function TodoForm() {
  const { fetchTodos } = useTodoStore()!;

  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(VITE_TODOS_FETCH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // @ts-ignore
          item: inputRef.current?.value,
          id: crypto.randomUUID(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      await fetchTodos();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      id="add-todo-wrapper"
      className="text-2xl  lg:text-3xl 2xl:text-4xl flex flex-col gap-2 lg:gap-4 2xl:gap-6 pb-25"
    >
      <p>What do you want to do today?</p>
      <input
        className="border-b w-full text-center outline-none pt-4"
        ref={inputRef}
      />
      <button
        disabled={isLoading}
        className="text-lg border min-w-20 cursor-pointer hover:bg-black hover:text-white self-center"
        onClick={(e) => {
          // @ts-ignore
          const value = inputRef.current.value.trim();
          if (!value) return;

          // @ts-ignore
          handleSubmit(e);
          // @ts-ignore
          inputRef.current.value = "";
        }}
      >
        Send
      </button>
    </form>
  );
}
