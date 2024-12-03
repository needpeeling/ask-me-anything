import { Achievement } from "./achievement";

export type UserCore = {
    id: number;
    name: string;
    job: string;
};

export type UserPost = UserCore;

export type UserProfile = UserCore & {
    description: string;
    location: string;
    achievements: Achievement[];
}