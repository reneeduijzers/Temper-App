export type Post = {
    index: number;
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface PostListProps {
    posts: Post[];
    handleClickUp: (posts: Post[], postIndex: number) => void;
    handleClickDown: (posts: Post[], postIndex: number) => void;
}

export interface PostProps extends PostListProps {
    post: Post;
}
