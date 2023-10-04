export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface PostListProps {
    posts: Post[];
}

export interface PostProps {
    post: Post;
}
