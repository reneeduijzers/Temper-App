import React from "react";
import { ArrowIconProps } from "../../types";

export default function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      className={`w-3 h-3 ${className}`}
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
  );
}
