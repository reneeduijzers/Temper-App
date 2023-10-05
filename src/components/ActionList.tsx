import React from "react";
import { Action, ActionListProps } from "../types";
import ActionItem from "./ActionItem";

export default function ActionList({ actions }: ActionListProps) {
    return (
        <div>
            <h1>List of actions Committed</h1>
            {actions.map((action: Action) => {
                return (
                    <ActionItem key={action.text} action={action}></ActionItem>
                );
            })}
        </div>
    );
}
