import { Category } from "./category";
import { User } from "./user";

export type Post = {
    id: number;
    user: User;
    title: string;
    categories: Category[];
    color: string;
    preview: string;
}