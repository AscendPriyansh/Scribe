import type { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import createHttpError from "http-errors";
import type { AuthRequest } from "../middleware/authentication.ts";
import { VisitModel, DownloadModel } from "./analyticsModel.ts";
import { BookModel } from "../book/bookModel.ts";
import { UserModel } from "../user/userModel.ts";

interface MonthGroup {
    key: string;
    month: string;
}

interface CountGroup {
    _id: string;
    count: number;
}

interface DownloadBookGroup {
    _id: Types.ObjectId;
    value: number;
}

interface DownloadGenreGroup {
    _id: string;
    value: number;
}

const buildLastMonths = (): MonthGroup[] => {
    const months: MonthGroup[] = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        months.push({
            key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
            month: d.toLocaleString("en-US", { month: "long" }),
        });
    }
    return months;
};

const recordVisit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const _req = req as AuthRequest;
        if (!_req.userId) {
            return next(createHttpError(401, "Unauthorized."));
        }

        await VisitModel.create({ user: _req.userId });

        return res.status(201).json({ message: "Visit recorded." });
    } catch (err) {
        return next(createHttpError(500, "Internal Server Error."));
    }
};

const getDashboardStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const _req = req as AuthRequest;
        type BookFilter = Parameters<typeof BookModel.find>[0];
        const authorFilter = { author: _req.userId } as unknown as BookFilter;
        const myBooks = await BookModel.find(authorFilter, { _id: 1, title: 1 });
        const bookIds = myBooks.map((b) => b._id);
        const bookIdMatch = { book: { $in: bookIds } };

        const now = new Date();
        const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);
        const months = buildLastMonths();

        const [profileVisits, totalDownloads, myBooksCount, downloadsByBookAgg, downloadsByGenreAgg, usersPerMonthAgg, downloadsPerMonthAgg] =
            await Promise.all([
                VisitModel.countDocuments({ user: _req.userId }),
                DownloadModel.countDocuments(bookIdMatch),
                BookModel.countDocuments(authorFilter),
                DownloadModel.aggregate<DownloadBookGroup>([
                    { $match: bookIdMatch },
                    { $group: { _id: "$book", value: { $sum: 1 } } },
                    { $sort: { value: -1 } },
                    { $limit: 5 },
                ]),
                DownloadModel.aggregate<DownloadGenreGroup>([
                    { $match: bookIdMatch },
                    {
                        $lookup: {
                            from: "books",
                            localField: "book",
                            foreignField: "_id",
                            as: "bookInfo",
                        },
                    },
                    { $unwind: "$bookInfo" },
                    { $unwind: "$bookInfo.genre" },
                    { $group: { _id: "$bookInfo.genre", value: { $sum: 1 } } },
                    { $sort: { value: -1 } },
                ]),
                UserModel.aggregate<CountGroup>([
                    { $match: { createdAt: { $gte: sixMonthsAgo } } },
                    { $group: { _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, count: { $sum: 1 } } },
                ]),
                DownloadModel.aggregate<CountGroup>([
                    { $match: { createdAt: { $gte: sixMonthsAgo }, ...bookIdMatch } },
                    { $group: { _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, count: { $sum: 1 } } },
                ]),
            ]);

        const titleMap = new Map(myBooks.map((b) => [b._id.toString(), b.title]));

        const usersPerMonth = months.map((m) => ({
            month: m.month,
            users: usersPerMonthAgg.find((x) => x._id === m.key)?.count ?? 0,
        }));

        const downloadsPerMonth = months.map((m) => ({
            month: m.month,
            downloads: downloadsPerMonthAgg.find((x) => x._id === m.key)?.count ?? 0,
        }));

        const downloadsByBook = downloadsByBookAgg.map((x) => ({
            name: titleMap.get(x._id.toString()) ?? "Unknown",
            value: x.value,
        }));

        const downloadsByGenre = downloadsByGenreAgg.map((x) => ({
            genre: x._id,
            value: x.value,
        }));

        return res.status(200).json({
            profileVisits,
            totalDownloads,
            myBooksCount,
            usersPerMonth,
            downloadsPerMonth,
            downloadsByBook,
            downloadsByGenre,
        });
    } catch (err) {
        return next(createHttpError(500, "Internal Server Error."));
    }
};

export { recordVisit, getDashboardStats };
