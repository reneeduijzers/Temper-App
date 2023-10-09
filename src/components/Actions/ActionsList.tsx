import React from "react";
import { Action, ActionsListProps } from "../../types";
import ActionItem from "./ActionItem";

export default function ActionsList({
    actions,
    handleTimeTravel,
}: ActionsListProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg h-fit flex flex-col">
            <div className="h-18 text-xl text-neutral-600 flex items-center p-6">
                <h1>List of Actions Committed</h1>
            </div>
            <div className="h-fit bg-neutral-100 flex flex-col p-6 rounded-b-lg">
                {actions &&
                    actions.map((action: Action, index: number) => {
                        return (
                            <ActionItem
                                key={action.id}
                                handleTimeTravel={handleTimeTravel}
                                action={action}
                                actionIndex={index}
                            ></ActionItem>
                        );
                    })}
            </div>
        </div>
    );
}
