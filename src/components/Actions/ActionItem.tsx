import React from "react";
import { ActionItemProps } from "../../types";
import TimeTravelButton from "../buttons/TimeTravelButton";

export default function ActionItem({
  action,
  actionIndex,
  handleTimeTravel,
}: ActionItemProps) {
  return (
    <div className="relative bg-white h-16 border border-b-0 last:border flex items-center p-3 text-neutral-500">
      <h1>{action.text}</h1>
      <TimeTravelButton
        handleTimeTravel={handleTimeTravel}
        actionIndex={actionIndex}
      ></TimeTravelButton>
    </div>
  );
}
