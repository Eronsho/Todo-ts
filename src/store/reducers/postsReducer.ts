import { Posts } from "./../../types/posts";
import { action } from "mobx";
import { PostsAction, PostsState, PostsActionTypes } from "../../types/posts";

const initialState: PostsState = {
  posts: [],
  loading: false,
};

export const postsReducer = (
  state = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.DELET_POST:
      debugger;
      return {
        ...state,
        loading: false,

        posts: state.posts.filter((p) => p.id != action.payload),
      };
    case PostsActionTypes.ADD_POST:
      return {
        ...state,
        loading: false,

        posts: state.posts.concat(action.payload),
      };

    case PostsActionTypes.COMPLETED_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post: Posts): Posts => {
          if (post.id == action.payload) {
            post.completed = !post.completed;
          }
          return post;
        }),
      };
    case PostsActionTypes.ACTIVAT_EDIT_MOT:
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post: Posts): Posts => {
          if (post.id == action.payload) {
            post.edit = !post.edit;
          }
          return post;
        }),
      };
    case PostsActionTypes.EDIT_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post: Posts): Posts => {
          if (post.id == action.payload) {
            debugger;
            post.title = action.title;
          }
          return post;
        }),
      };
    default:
      return state;
  }
};
