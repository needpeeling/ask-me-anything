import { Achievement } from "./achievement";
import { Color } from "./color";

export type UserCore = {
    id: number;
    name: string;
}

export type UserAskMe = UserCore & {
    job: string;
    description: string;
    color: Color;
    location: string;
    achievements: Achievement[];
}

export type UserCommunity = UserCore;