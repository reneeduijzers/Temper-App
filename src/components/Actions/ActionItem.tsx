import React from "react";
import { ActionItemProps } from "../../types";

export default function ActionItem({
    action,
    actionIndex,
    handleTimeTravel,
}: ActionItemProps) {
    return (
        <div className="h-20 border-2">
            <h1>{action.text}</h1>
            <button
                onClick={() => handleTimeTravel(actionIndex)}
                className={
                    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-8"
                }
            >
                {"timetravel"}
            </button>
        </div>
    );
}
