import { Category } from "./category";
import { Color } from "./color";
import { UserAskMe, UserCommunity } from "./user";

export type PostCommunity = {
    id: number;
    user: UserCommunity;
    title: string;
    categories: Category[];
    color: string;
    preview: string;
}

export type PostCommunityView = {
    id: number;
    user: UserCommunity;
    title: string;
    categories: Category[];
    color: Color;
    content: string;
}

export type PostAskMe = {
    id: number;
    user: UserAskMe;
}