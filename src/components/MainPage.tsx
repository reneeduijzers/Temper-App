import React, { useEffect, useState } from "react";
import { Post } from "../types";
import ActionList from "./ActionList";
import PostList from "./PostList";

export default function MainPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    console.log(posts);
    // const [actionList, setActionList] = useState<Action[]>([]);
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

    return (
        <div className="flex w-full">
            <div className="flex-1 m-8">
                <PostList posts={posts} />
            </div>
            <div className="flex-1 m-8">
                <ActionList />
            </div>
        </div>
    );
}
