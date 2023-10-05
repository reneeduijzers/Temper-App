export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export interface PostListProps {
    posts: Post[];
    handleClick: (postIndex: number, direction: string) => void;
}
export interface PostCardProps {
    post: Post;
    postIndex: number;
    handleClick: (postIndex: number, direction: string) => void;
}

export type Action = {
    id: string;
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
