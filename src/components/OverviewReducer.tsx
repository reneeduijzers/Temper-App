import { v4 as uuidv4 } from "uuid";

export const ActionTypes = {
  SET_POSTS: "SET_POSTS",
  MOVE_POST: "MOVE_POST",
  UNDO_ACTION: "UNDO_ACTION",
  INITIALIZE_POSTS: "INITIALIZE_POSTS",
};

export default function overviewReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: action.payload };
    case ActionTypes.MOVE_POST: {
      const { postIndex, newPostIndex } = action.payload;
      const post = state.posts[postIndex];
      const updatedPosts = [...state.posts];
      updatedPosts[postIndex] = updatedPosts[newPostIndex];
      updatedPosts[newPostIndex] = post;

      const newAction = {
        id: uuidv4(),
        text: `Moved post ${post?.id} from index ${postIndex} to ${newPostIndex}`,
      };

      return {
        ...state,
        posts: updatedPosts,
        actions: [newAction, ...state.actions],
        postsHistory: [state.posts, ...state.postsHistory],
      };
    }
    case ActionTypes.UNDO_ACTION: {
      const { actionIndex } = action.payload;
      return {
        ...state,
        posts: state.postsHistory[actionIndex],
        postsHistory: state.postsHistory.slice(actionIndex + 1),
        actions: state.actions.slice(actionIndex + 1),
      };
    }
    case ActionTypes.INITIALIZE_POSTS:
      return { ...state, posts: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
