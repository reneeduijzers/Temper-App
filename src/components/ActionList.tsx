import React from "react";
import { Action, ActionListProps } from "../types";
import ActionItem from "./ActionItem";

export default function ActionList({
    actions,
    handleTimeTravel,
}: ActionListProps) {
    return (
        <div>
            <h1>List of actions Committed</h1>
            {actions &&
                actions.map((action: Action) => {
                    return (
                        <ActionItem
                            key={action.text}
                            handleTimeTravel={handleTimeTravel}
                            action={action}
                            actions={actions}
                        ></ActionItem>
                    );
                })}
        </div>
    );
}
