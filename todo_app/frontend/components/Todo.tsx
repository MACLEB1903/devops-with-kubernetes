import { useState } from "react";

type TodoProps = {
  todo: string;
};

export default function Todo({ todo }: TodoProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li
      className="gap-2 flex-row flex cursor-pointer"
      onClick={() => (isChecked ? setIsChecked(false) : setIsChecked(true))}
    >
      <input type="checkbox" checked={isChecked} className="cursor-pointer" />
      <span className={`${isChecked && "line-through"}`}>{todo}</span>
    </li>
  );
}
