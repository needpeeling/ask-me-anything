import { Achievement } from "./achievement";

export type User = {
    id: number;
    name: string;
    job: string;
    description: string;
    location: string;
    achievements: Achievement[];
    anonymous: boolean;
};
export type UserPost = {
    id: number;
    name: string;
    job: string;
};