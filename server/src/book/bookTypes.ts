import type { User } from "../user/userTypes.ts";
import type { Types } from "mongoose";

export interface Book {
    _id: string,
    title: string,
    description: string,
    author: Types.ObjectId | User,
    genre: string[],
    coverImage: string,
    file: string,
    createdAt: Date;
    updatedAt: Date;
}