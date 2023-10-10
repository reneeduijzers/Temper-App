import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Action, Post } from "../types";
import ActionsList from "./actions/ActionsList";
import PostList from "./posts/PostsList";

export default function OverviewPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [actions, setActions] = useState<Action[]>([]);
    const [postsHistory, setPostsHistory] = useState<Post[][]>([]);
    // could use this for errortoast or another way to give more information to the user
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

    return (
        <div className="relative">
            <div className="w-screen h-screen bg-neutral-100 absolute top-0 left-0 z-negative2"></div>
            <div
                className="w-screen h-0 absolute top-0 left-0 z-negative1 border-t-[250px] border-t-temper-purple
                border-r-vw border-r-transparent"
            ></div>
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
    );
}
