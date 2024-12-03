import { Category } from "./category";
import { Color } from "./color";
import { UserPost } from "./user";

export type Post = {
    id: number;
    user: UserPost;
    title: string;
    actions: PostActions;
    color: string;
    preview: string;
};

export type PostView = {
    id: number;
    user: UserPost;
    title: string;
    actions: PostActions;
    color: Color;
    content: string;
};

type PostActions = {
    comments: number;
    likes: number;
}