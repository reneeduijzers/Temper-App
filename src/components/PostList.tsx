import React from "react";
import { Post, PostListProps } from "../types";
import PostCard from "./PostCard";

export default function PostList({
    posts,
    handleClickDown,
    handleClickUp,
}: PostListProps) {
    return (
        <div className={"space-y-4"}>
            <h1>Sortable Post List</h1>
            {posts.map((post: Post) => {
                return (
                    <PostCard
                        handleClickUp={handleClickUp}
                        handleClickDown={handleClickDown}
                        key={post.id}
                        post={post}
                        posts={posts}
                    ></PostCard>
                );
            })}
        </div>
    );
}
