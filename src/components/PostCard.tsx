import React from "react";
import { PostCardProps } from "../types";

export default function PostCard({
    posts,
    post,
    handleClickDown,
    handleClickUp,
}: PostCardProps) {
    const postIndex = posts.indexOf(post);

    const showUp = postIndex !== 0;
    const showDown = postIndex !== 4;

    return (
        <div className="h-20 border-2">
            <h1>{`Post ${post.id}`}</h1>
            {showUp && (
                <button
                    onClick={() => handleClickUp(postIndex)}
                    className={
                        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-8"
                    }
                >
                    {"up"}
                </button>
            )}{" "}
            {showDown && (
                <button
                    onClick={() => handleClickDown(postIndex)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {"down"}
                </button>
            )}
        </div>
    );
}
