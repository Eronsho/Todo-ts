import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoForm } from "../components/TodoForm";
import { ToDoList } from "../components/ToDoList";
import { useTypeSelector } from "../hooks/useTypeSelector";
// import { getData } from "../http";
import { ITodo } from "../interfaces";
import {
  deletPost,
  addPosts,
  complidPost,
  activatEditMode,
  editPost,
} from "../store/action-creators/posts";
import { Posts } from "../types/posts";

export const TodosPage: React.FC = () => {
  const { posts, loading } = useTypeSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as Posts;
    dispatch(addPosts(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(posts));
  }, [posts]);
  const addHandler = (title: string) => {
    if (title.length > 1) {
      const newTodo: Posts = {
        title: title,
        id: Math.random(),
        date: new Date().toLocaleTimeString(),
        completed: false,
        edit: false,
      };

      dispatch(addPosts(newTodo));
    }
  };
  const toggleHandler = (id: number) => {
    dispatch(complidPost(id));
  };
  const removeHandler = (id: number) => {
    dispatch(deletPost(id));
  };
  const activatEdit = (id: number) => {
    dispatch(activatEditMode(id));
  };
  const editPosts = (id: number, title: string) => {
    dispatch(editPost(id, title));
  };
  return (
    <>
      <TodoForm addHandler={addHandler} />
      <ToDoList
        todos={posts}
        onToggle={toggleHandler}
        onRemove={removeHandler}
        onEdit={activatEdit}
        editPost={editPosts}
      />
    </>
  );
};
