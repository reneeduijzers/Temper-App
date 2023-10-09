import React from "react";
import { Post, PostsListProps } from "../../types";
import PostCard from "./PostCard";

export default function PostsList({ posts, handleClick }: PostsListProps) {
    return (
        <div className="space-y-4">
            <h1 className="text-xl text-white">Sortable Post List</h1>
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
