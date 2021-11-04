export interface PostsState {
  posts: Posts[];
  loading: boolean;
}
export interface Posts {
  id: number;
  title: string;
  completed: boolean;
  edit: boolean;
  date: number | string;
}
export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESSS = "FETCH_POSTS_SUCCESSS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  DELET_POST = "DELET_POST",
  ADD_POST = "ADD_POST",
  FETCH_ONE_POST = "FETCH_ONE_POST",
  COMPLETED_POST = "COMPLETED_POST",
  ACTIVAT_EDIT_MOT = "ACTIVAT_EDIT_MOT",
  EDIT_POST = "EDIT_POST",
}
interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccsessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESSS;
  payload: Posts[];
}
interface FetchPostsError {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}
interface DeletPostAction {
  type: PostsActionTypes.DELET_POST;
  payload: number;
}
interface AddpostAchion {
  type: PostsActionTypes.ADD_POST;
  payload: Posts;
}
interface FetchOnePostAction {
  type: PostsActionTypes.FETCH_ONE_POST;
  payload: number;
}
interface CompletedPostAction {
  type: PostsActionTypes.COMPLETED_POST;
  payload: number;
}
interface ActivatEditMode {
  type: PostsActionTypes.ACTIVAT_EDIT_MOT;
  payload: number;
}
interface EditPostAction {
  type: PostsActionTypes.EDIT_POST;
  payload: number;
  title: string;
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccsessAction
  | FetchPostsError
  | DeletPostAction
  | AddpostAchion
  | FetchOnePostAction
  | CompletedPostAction
  | ActivatEditMode
  | EditPostAction;
