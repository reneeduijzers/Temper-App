import React from "react";
import { PostProps } from "../types";

export default function PostCard({ post }: PostProps) {
    return (
        <div className="h-20 border-2">
            <h1>{`Post ${post.id}`}</h1>
        </div>
    );
}
