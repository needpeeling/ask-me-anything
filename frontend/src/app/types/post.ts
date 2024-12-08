import { Category } from "./category";
import { UserPost } from "./user";

export type Post = {
    id: number;
    user: UserPost;
    title: string;
    actions: PostActions;
    category: Category;
    preview: string;
    liked: boolean;
    anonymous: boolean;
};

export type PostView = {
    id: number;
    user: UserPost;
    title: string;
    actions: PostActions;
    category: Category;
    content: string;
    comments: PostComment[];
    liked: boolean;
    anonymous: boolean;
};

export type PostActions = {
    comments: number;
    likes: number;
};

export type PostComment = {
    id: number;
    content: string;
    likes: number;
    user: UserPost;
    liked: boolean;
    anonymous: boolean;
    star: boolean;
};