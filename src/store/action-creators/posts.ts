import axios from "axios";
import { Dispatch } from "redux";
import { PostsActionTypes, PostsAction, Posts } from "./../../types/posts";

export const deletPost = (id: number) => {
  return (dispatch: Dispatch<PostsAction>) => {
    dispatch({
      type: PostsActionTypes.DELET_POST,
      payload: id,
    });
  };
};
export const addPosts = (post: Posts) => {
  return (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: PostsActionTypes.ADD_POST, payload: post });
  };
};
export const complidPost = (id: number) => {
  return (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: PostsActionTypes.COMPLETED_POST, payload: id });
  };
};
export const activatEditMode = (id: number) => {
  return (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: PostsActionTypes.ACTIVAT_EDIT_MOT, payload: id });
  };
};
export const editPost = (id: number, title: string) => {
  return (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: PostsActionTypes.EDIT_POST, payload: id, title: title });
  };
};
