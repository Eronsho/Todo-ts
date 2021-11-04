import React, { useState } from "react";
interface TodoFormsProps {
  addHandler(title: string): void;
}
export const TodoForm: React.FC<TodoFormsProps> = (props) => {
  const [title, seTitle] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    seTitle(e.target.value);
  };
  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.addHandler(title);
      seTitle("");
    }
  };
  return (
    <div className="input-field col s6">
      <input
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        className="input-field"
        placeholder="Ввeдите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Ввeдите название дела
      </label>
    </div>
  );
};
