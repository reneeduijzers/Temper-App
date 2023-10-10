import React from "react";
import { PostCardProps } from "../../types";

export default function PostCard({
    post,
    postIndex,
    handleClick,
}: PostCardProps) {
    const showUp = postIndex !== 0;
    const showDown = postIndex !== 4;

    return (
        <div className="relative bg-white text-neutral-500 p-3 rounded-lg shadow-lg h-24 flex items-center hover:scale-105">
            <p>{`Post ${post.id}`}</p>
            {showUp && (
                <button
                    className="absolute top-0 right-0 m-3 hover:bg-neutral-100 py-2 px-2 rounded"
                    onClick={() => handleClick(postIndex, "up")}
                >
                    <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            )}
            {showDown && (
                <button
                    className="absolute bottom-0 right-0 m-3 hover:bg-neutral-100 py-2 px-2 rounded"
                    onClick={() => handleClick(postIndex, "down")}
                >
                    <svg
                        className="w-3 h-3 rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
