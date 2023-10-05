import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Action, Post } from "../types";
import ActionsList from "./Actions/ActionsList";
import PostList from "./Posts/PostsList";

export default function OverviewPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [actions, setActions] = useState<Action[]>([]);
    const [postsHistory, setPostsHistory] = useState<Post[][]>([]);
    const [error, setError] = useState<string>("");

    async function getPosts() {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const response = await fetch(url);
        if (response.status === 200) {
            const data = (await response.json()) as Post[];
            const firstFivePosts = data.slice(0, 5);
            setPosts(firstFivePosts);
        } else {
            setError(response.statusText);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

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
        setPostsHistory([...postsHistory, posts]);
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

    return (
        <div className="flex w-full">
            <div className="flex-1 m-8">
                <PostList handleClick={handleClick} posts={posts} />
            </div>
            <div className="flex-1 m-8">
                <ActionsList
                    handleTimeTravel={handleTimeTravel}
                    actions={actions}
                />
            </div>
        </div>
    );
}
