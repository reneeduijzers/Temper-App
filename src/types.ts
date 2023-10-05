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
export interface PostCardProps extends PostListProps {
    post: Post;
}

export type Action = {
    text: string;
};
export interface ActionListProps {
    actions: Action[];
    handleTimeTravel: (actionIndex: number) => void;
}
export interface ActionItemProps extends ActionListProps {
    action: Action;
}
