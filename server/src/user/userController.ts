import type { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { UserModel } from "./userModel.ts";
import { BookModel } from "../book/bookModel.ts";
import bcrypt from "bcrypt";
import { config } from "../config/config.ts";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

const Register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password, role, location, description } = req.body;

        if (!name || !email || !password) {
            return next(createHttpError(400, "Invalid Credentials."));
        }

        const userExist = await UserModel.findOne({ email: email });

        if (userExist) {
            return next(createHttpError(409, "User with this email already exist."));
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword,
            role: role,
            location: location,
            description: description
        });

        const { password: _, ...userWithoutPassword } = user.toObject();

        return res.status(201).json({
            message: "User created successfully.",
            user: userWithoutPassword
        });
    } catch (err) {
        return next(createHttpError(500, "Internal server error."));
    }
}

const Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(createHttpError(400, "Invalid Credentials."));
        }

        const userExist = await UserModel.findOne({ email: email });

        if (!userExist) {
            return next(createHttpError(400, "User doesn't exist."));
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (!isPasswordValid) {
            return next(createHttpError(401, "Invalid Credentials."));
        }

        const token = jwt.sign({ id: userExist._id.toString() }, config.jwt_secret as string, { expiresIn: "7d" });

        return res.status(200).json({
            message: "Login successful.",
            token: token,
            user: {
                name: userExist.name,
                email: userExist.email
            }
        });

    } catch (err) {
        return next(createHttpError(500, "Internal server error."));
    }
}

const Profile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req as any).userId as string | undefined;

        if(!userId) {
            return next(createHttpError(403, "Unauthorized Access."));
        }

        const user = await UserModel.findById(userId).select("-password");
        if(!user) {
            return next(createHttpError(404, "User not found."));
        }

        return res.status(200).json({
            message: "Profile fetched successfully.",
            user: user
        });        
    } catch(err) {
        return next(createHttpError(500, "Internal Server Error."));
    }
}


const SearchUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = (req.query.q as string || "").trim();

        if (!query) {
            return res.status(200).json({ message: "Fetched successfully.", users: [] });
        }

        const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(escaped.split(/\s+/).join(".*"), "i");

        const users = await UserModel.aggregate([
            { $match: { $or: [{ name: regex }, { email: regex }] } },
            { $limit: 20 },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "author",
                    as: "books",
                },
            },
            { $unset: "password" },
            { $addFields: { bookCount: { $size: "$books" } } },
            { $unset: "books" },
        ]);

        return res.status(200).json({
            message: "Fetched successfully.",
            users,
        });
    } catch (err) {
        return next(createHttpError(500, "Error while searching users."));
    }
}

const GetPublicProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;

        const user = await UserModel.findById(userId).select("-password");
        if (!user) {
            return next(createHttpError(404, "User not found."));
        }

        const books = await BookModel.find({ author: new Types.ObjectId(String(userId)) } as any)
            .populate("author", "name")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Profile fetched successfully.",
            user,
            books,
        });
    } catch (err) {
        return next(createHttpError(500, "Error while fetching profile."));
    }
}


export { Register, Login, Profile, SearchUsers, GetPublicProfile };