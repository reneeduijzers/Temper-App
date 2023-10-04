import React from "react";
import { Post, PostListProps } from "../types";
import PostCard from "./PostCard";

export default function PostList({ posts }: PostListProps) {
    return (
        <div className={"space-y-4"}>
            <h1>Sortable Post List</h1>
            {posts.map((post: Post) => {
                return <PostCard key={post.id} post={post}></PostCard>;
            })}
        </div>
    );
}
