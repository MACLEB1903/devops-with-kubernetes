import { useEffect } from "react";
import { useTodoStore } from "../store/todoStore";

import Todo from "./Todo";
export default function TodoList() {
  const { todos, fetchTodos } = useTodoStore()!;

  useEffect(() => {
    fetchTodos();
  }, []);

  if (todos.length <= 0) return;

  return (
    <div id="todo-list-wrapper" className="text-md lg:text-lg 2xl:text-xl">
      <p className="pb-2">Your todos:</p>
      <ul className="gap-1 flex flex-col">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}
