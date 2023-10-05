import React from "react";
import { Action, ActionsListProps } from "../../types";
import ActionItem from "./ActionItem";

export default function ActionsList({
    actions,
    handleTimeTravel,
}: ActionsListProps) {
    return (
        <div>
            <h1>List of actions Committed</h1>
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
    );
}
