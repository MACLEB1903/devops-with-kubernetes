import { useRef, useState } from "react";

import Hero from "./Hero";
import Todo from "./Todo";

export default function Todos() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  return (
    <section className="w-full h-screen absolute z-100 flex flex-col items-center justify-center gap-12 xl:gap-18 2xl:gap-24 text-white">
      <Hero />

      <div
        id="add-todo-wrapper"
        className="text-2xl  lg:text-3xl 2xl:text-4xl flex flex-col gap-2 lg:gap-4 2xl:gap-6"
      >
        <p>What do you want to do today?</p>
        <input
          className="border-b w-full text-center outline-none pt-4"
          ref={inputRef}
        />
        <button
          className="text-lg border min-w-20 cursor-pointer hover:bg-black hover:text-white self-center"
          onClick={() => {
            // @ts-ignore
            const value = inputRef.current.value.trim();
            if (!value) return;

            // @ts-ignore
            setTodos((prev) => [...prev, value]);
            // @ts-ignore
            inputRef.current.value = "";
          }}
        >
          Send
        </button>
      </div>
      {todos.length > 0 && (
        <div id="todo-list-wrapper" className="text-md lg:text-lg 2xl:text-xl">
          <p className="pb-2">Your todos:</p>
          <ul className="gap-1 flex flex-col">
            {todos.map((todo) => (
              <Todo todo={todo} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
