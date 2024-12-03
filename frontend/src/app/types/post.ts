import { Category } from "./category";
import { Color } from "./color";
import { UserAskMe, UserPostFeed } from "./user";

export type PostFeed = {
    id: number;
    user: UserPostFeed;
    title: string;
    categories: Category[];
    color: string;
    preview: string;
}

export type PostFeedView = {
    id: number;
    user: UserPostFeed;
    title: string;
    categories: Category[];
    color: Color;
    content: string;
}

export type PostAskMe = {
    id: number;
    user: UserAskMe;
}