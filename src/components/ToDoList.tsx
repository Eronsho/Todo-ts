import React, { useState } from "react";
import { useHistory } from "react-router";

import { Posts } from "../types/posts";
type ToDoListProps = {
  todos: Posts[];
  onToggle(id: number): void;
  onEdit(id: number): void;
  onRemove(id: number): void;
  editPost(id: number, tittle: string): void;
};
export const ToDoList: React.FC<ToDoListProps> = ({
  todos,
  onRemove,
  onToggle,
  onEdit,
  editPost,
}) => {
  const [value, setValue] = useState("");
  const asctivatEditMode = (id: number, title: string): void => {
    onEdit(id);
    setValue(title);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const deactivatEditMode = (id: number, tittle: string) => {
    onEdit(id);
    editPost(id, tittle);
  };
  if (todos.length === 0) {
    return <p className="center">пока дeл нет</p>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];

        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onClick={onToggle.bind(null, todo.id)}
              />
              <span>{todo.date}</span>
              <span onDoubleClick={() => asctivatEditMode(todo.id, todo.title)}>
                {!todo.edit ? (
                  todo.title
                ) : (
                  <input
                    onChange={changeHandler}
                    autoFocus={true}
                    onBlur={() => deactivatEditMode(todo.id, value)}
                    value={value}
                  />
                )}
              </span>

              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
