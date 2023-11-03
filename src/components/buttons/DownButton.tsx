import React from "react";
import { ButtonProps } from "../../types";
import ArrowIcon from "./ArrowIcon";

export default function DownButton({ handleClick, postIndex }: ButtonProps) {
  return (
    <button
      className="absolute bottom-0 right-0 m-3 hover:bg-neutral-100 py-2 px-2 rounded"
      onClick={() => handleClick(postIndex, "down")}
    >
      <ArrowIcon className={"rotate-180"} />
    </button>
  );
}
