import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import usePosts from "../hooks/usePosts";
import { Action, Post } from "../types";
import ActionsList from "./actions/ActionsList";
import PostList from "./posts/PostsList";

export default function OverviewContainer() {
  const { data, isLoading, isError } = usePosts();
  const [posts, setPosts] = useState<Post[]>(data);
  const [actions, setActions] = useState<Action[]>([]);
  const [postsHistory, setPostsHistory] = useState<Post[][]>([]);

  function createAction(postIndex: number, newPostIndex: number) {
    const post = posts.find((post) => posts.indexOf(post) === postIndex);
    const updatedActions = [...actions];
    updatedActions.unshift({
      id: uuidv4(),
      text: `Moved post ${post?.id} from index ${postIndex} to ${newPostIndex}`,
    });
    setActions(updatedActions);
  }

  const handleClick = (postIndex: number, direction: string) => {
    setPostsHistory([posts, ...postsHistory]);
    const updatedPosts = [...posts];
    const temp = updatedPosts[postIndex];
    const newPostIndex = direction === "up" ? postIndex - 1 : postIndex + 1;
    updatedPosts[postIndex] = updatedPosts[newPostIndex];
    updatedPosts[newPostIndex] = temp;
    setPosts(updatedPosts);
    createAction(postIndex, newPostIndex);
  };

  const handleTimeTravel = (actionIndex: number) => {
    const selectedPostHistory = postsHistory[actionIndex];
    setPosts(selectedPostHistory);
    setPostsHistory(postsHistory.slice(actionIndex + 1));
    setActions(actions.slice(actionIndex + 1));
  };

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    data && (
      <div>
        <div className="flex w-full h-full">
          <div className="flex-1 m-16">
            <PostList handleClick={handleClick} posts={posts} />
          </div>
          <div className="flex-1 m-16">
            <ActionsList
              handleTimeTravel={handleTimeTravel}
              actions={actions}
            />
          </div>
        </div>
      </div>
    )
  );
}
