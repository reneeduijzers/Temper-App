export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export interface PostListProps {
    posts: Post[];
    handleClickUp: (postIndex: number) => void;
    handleClickDown: (postIndex: number) => void;
}
export interface PostCardProps {
    post: Post;
    postIndex: number;
    handleClickUp: (postIndex: number) => void;
    handleClickDown: (postIndex: number) => void;
}

export type Action = {
    text: string;
};
export interface ActionListProps {
    actions: Action[];
    handleTimeTravel: (actionIndex: number) => void;
}
export interface ActionItemProps {
    action: Action;
    actionIndex: number;
    handleTimeTravel: (actionIndex: number) => void;
}
