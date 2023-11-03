import React from "react";
import { TimeTravelButtonProps } from "../../types";

export default function TimeTravelButton({
  handleTimeTravel,
  actionIndex,
}: TimeTravelButtonProps) {
  return (
    <button
      onClick={() => handleTimeTravel(actionIndex)}
      className={
        "absolute right-0 bg-temper-green hover:bg-transparent hover:text-temper-green hover:border hover:border-temper-green hover:scale-110 text-neutral-900 font-semibold py-2 px-4 rounded m-3"
      }
    >
      Time travel
    </button>
  );
}
