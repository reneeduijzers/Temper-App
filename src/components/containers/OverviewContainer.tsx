import { isEqual } from "lodash";
import React, { useEffect, useReducer, useRef } from "react";
import usePosts from "../../hooks/usePosts";
import ActionsList from "../actions/ActionsList";
import overviewReducer, { ActionTypes } from "../OverviewReducer";
import PostList from "../posts/PostsList";

export default function OverviewContainer() {
  const { data, isLoading, isError } = usePosts();
  const [state, dispatch] = useReducer(overviewReducer, {
    posts: [],
    actions: [],
    postsHistory: [],
  });
  const prevDataRef = useRef();

  useEffect(() => {
    if (data && !isEqual(prevDataRef.current, data)) {
      dispatch({ type: ActionTypes.INITIALIZE_POSTS, payload: data });
      prevDataRef.current = data;
    }
  }, [data, dispatch]);

  const handleClick = (postIndex, direction) => {
    const newPostIndex = direction === "up" ? postIndex - 1 : postIndex + 1;
    dispatch({
      type: ActionTypes.MOVE_POST,
      payload: { postIndex, newPostIndex },
    });
  };

  const handleTimeTravel = (actionIndex) => {
    dispatch({
      type: ActionTypes.UNDO_ACTION,
      payload: { actionIndex },
    });
  };

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    data && (
      <div>
        <div className="flex w-full h-full">
          <div className="flex-1 m-16">
            <PostList handleClick={handleClick} posts={state.posts} />
          </div>
          <div className="flex-1 m-16">
            <ActionsList
              handleTimeTravel={handleTimeTravel}
              actions={state.actions}
            />
          </div>
        </div>
      </div>
    )
  );
}
