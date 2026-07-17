import { create } from "zustand";

type TodoType = {
  id: string;
  item: string;
};

type TodoStoreType = {
  todos: TodoType[];
  fetchTodos: () => Promise<void>;
};

export const useTodoStore = create<TodoStoreType>((set) => ({
  todos: [],
  fetchTodos: async () => {
    try {
      const response = await fetch("/todos");
      const items: TodoType[] = await response.json();
      set({ todos: items });
    } catch (error) {
      console.error(error);
    }
  },
}));
