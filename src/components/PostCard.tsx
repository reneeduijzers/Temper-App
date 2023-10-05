import React from "react";
import { PostCardProps } from "../types";

export default function PostCard({
    post,
    postIndex,
    handleClick,
}: PostCardProps) {
    const showUp = postIndex !== 0;
    const showDown = postIndex !== 4;

    return (
        <div className="h-20 border-2">
            <h1>{`Post ${post.id}`}</h1>
            {showUp && (
                <button
                    onClick={() => handleClick(postIndex, "up")}
                    className={
                        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-8"
                    }
                >
                    {"up"}
                </button>
            )}{" "}
            {showDown && (
                <button
                    onClick={() => handleClick(postIndex, "down")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {"down"}
                </button>
            )}
        </div>
    );
}
