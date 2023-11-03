import React from "react";
import { PostCardProps } from "../../types";
import DownButton from "../buttons/DownButton";
import UpButton from "../buttons/UpButton";

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
        <UpButton handleClick={handleClick} postIndex={postIndex}></UpButton>
      )}
      {showDown && (
        <DownButton
          handleClick={handleClick}
          postIndex={postIndex}
        ></DownButton>
      )}
    </div>
  );
}
