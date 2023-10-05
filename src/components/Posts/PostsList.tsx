import React from "react";
import { Post, PostListsProps } from "../../types";
import PostCard from "./PostCard";

export default function PostsList({ posts, handleClick }: PostListsProps) {
    return (
        <div className={"space-y-4"}>
            <h1>Sortable Post List</h1>
            {posts.map((post: Post, index: number) => {
                return (
                    <PostCard
                        handleClick={handleClick}
                        key={post.id}
                        post={post}
                        postIndex={index}
                    ></PostCard>
                );
            })}
        </div>
    );
}
