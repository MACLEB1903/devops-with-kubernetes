import { useState } from "react";

type TodoItemProps = {
  item: string;
  id: string;
};

type TodoProps = {
  todo: TodoItemProps;
};

export default function Todo({ todo }: TodoProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { id, item } = todo;

  return (
    <li
      id={`todo-${id}`}
      className="gap-2 flex-row flex cursor-pointer"
      onClick={() => (isChecked ? setIsChecked(false) : setIsChecked(true))}
    >
      <input type="checkbox" checked={isChecked} className="cursor-pointer" />
      <span className={`${isChecked && "line-through"}`}>{item}</span>
    </li>
  );
}
