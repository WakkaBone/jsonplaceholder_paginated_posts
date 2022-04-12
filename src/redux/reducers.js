import { GET_POSTS } from "./actions";

const initialState = { posts: [] };
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload.posts };
    default:
      return state;
  }
};
