import React from "react";
import { ActionItemProps } from "../../types";

export default function ActionItem({
    action,
    actionIndex,
    handleTimeTravel,
}: ActionItemProps) {
    return (
        <div className="relative bg-white h-16 border border-b-0 last:border flex items-center p-3 text-neutral-500">
            <h1>{action.text}</h1>
            <button
                onClick={() => handleTimeTravel(actionIndex)}
                className={
                    "absolute right-0 bg-temper-green hover:bg-transparent hover:text-temper-green hover:border hover:border-temper-green hover:scale-110 text-neutral-900 font-semibold py-2 px-4 rounded m-3"
                }
            >
                "Time travel
            </button>
        </div>
    );
}
