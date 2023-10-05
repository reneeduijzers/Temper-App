import React, { useEffect, useState } from "react";
import { Action, Post } from "../types";
import ActionList from "./ActionList";
import PostList from "./PostList";

export default function MainPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [actions, setActions] = useState<Action[]>([]);
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

    function createActionUp(postIndex: number) {
        const post = posts.find((post) => posts.indexOf(post) === postIndex);
        const updatedActions = [...actions];
        updatedActions.unshift({
            text: `Moved post ${post?.id} from index ${postIndex} to ${
                postIndex - 1
            }`,
        });
        setActions(updatedActions);
    }

    function createActionDown(postIndex: number) {
        const post = posts.find((post) => posts.indexOf(post) === postIndex);
        const updatedActions = [...actions];
        updatedActions.unshift({
            text: `Moved post ${post?.id} from index ${postIndex} to ${
                postIndex + 1
            }`,
        });
        setActions(updatedActions);
    }

    const handleClickUp = (postIndex: number) => {
        const updatedPosts = [...posts];
        const temp = updatedPosts[postIndex];
        updatedPosts[postIndex] = updatedPosts[postIndex - 1];
        updatedPosts[postIndex - 1] = temp;
        setPosts(updatedPosts);
        createActionUp(postIndex);
    };

    const handleClickDown = (postIndex: number) => {
        const updatedPosts = [...posts];
        const temp = updatedPosts[postIndex];
        updatedPosts[postIndex] = updatedPosts[postIndex + 1];
        updatedPosts[postIndex + 1] = temp;
        setPosts(updatedPosts);
        createActionDown(postIndex);
    };

    return (
        <div className="flex w-full">
            <div className="flex-1 m-8">
                <PostList
                    handleClickUp={handleClickUp}
                    handleClickDown={handleClickDown}
                    posts={posts}
                />
            </div>
            <div className="flex-1 m-8">
                <ActionList actions={actions} />
            </div>
        </div>
    );
}
