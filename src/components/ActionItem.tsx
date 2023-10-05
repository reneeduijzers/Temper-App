import React from "react";
import { ActionItemProps } from "../types";

export default function ActionItem({ action }: ActionItemProps) {
    return (
        <div className="h-20 border-2">
            <h1>{action.text}</h1>
            <button
                onClick={console.log}
                className={
                    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-8"
                }
            >
                {"timetravel"}
            </button>
        </div>
    );
}
