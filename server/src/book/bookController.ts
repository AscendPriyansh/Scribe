import type { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { BookModel } from "./bookModel.ts";
import createHttpError from "http-errors";
import path from "node:path";
import { Readable } from "node:stream";
import cloudinary from "../config/cloudinary.ts";
import type { AuthRequest } from "../middleware/authentication.ts";
import { DownloadModel } from "../analytics/analyticsModel.ts";

const directory = import.meta.dirname;

const createBook = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description } = req.body;
    const rawGenres = req.body.genre;
    const genres = Array.isArray(rawGenres) ? rawGenres : rawGenres ? [rawGenres] : [];

    if (!title || !description || genres.length === 0) {
        return next(createHttpError(400, "Credentials required."));
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

    if (!files?.coverImage?.[0] || !files?.file?.[0]) {
        return next(createHttpError(400, "file is required."));
    }

    const fileName = files.coverImage[0].filename;
    const filePath = path.resolve(directory, "../../public/data/uploads", fileName);

    try {
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            filename_override: fileName,
            folder: "book-covers",
        });

        const bookFileName = files.file[0].filename;
        const bookFilePath = path.resolve(directory, "../../public/data/uploads", bookFileName);

        const bookFileUploadResult = await cloudinary.uploader.upload(bookFilePath, {
            resource_type: "raw",
            filename_override: bookFileName,
            folder: "book-pdfs",
            format: "pdf"
        });

        const _req = req as AuthRequest;

        const newBook = await BookModel.create({
            title: title,
            description: description,
            author: new Types.ObjectId(_req.userId),
            genre: genres,
            coverImage: uploadResult.secure_url,
            file: bookFileUploadResult.secure_url,
        });

        res.status(201).json({
            message: "Book created successfully.",
            id: newBook._id
        });
    } catch (err) {
        return next(createHttpError(500, (err as Error).message));
    }
}

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description } = req.body;
    const rawGenres = req.body.genre;
    const genres = Array.isArray(rawGenres) ? rawGenres : rawGenres ? [rawGenres] : [];
    const bookId = req.params.bookId;

    try {
        const book = await BookModel.findById(bookId);

        if (!book) {
            return next(createHttpError(404, "Book Not Found"))
        }

        const _req = req as AuthRequest;

        if (book.author.toString() !== _req.userId) {
            return next(createHttpError(403, "You cannot update others book."));
        }

        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
        let completeCoverImage = "";
        if (files?.coverImage?.[0]) {

            const fileName = files.coverImage[0].filename;
            const filePath = path.resolve(directory, "../../public/data/uploads", fileName);


            const uploadResult = await cloudinary.uploader.upload(filePath, {
                filename_override: completeCoverImage,
                folder: "book-covers",
            });
            completeCoverImage = uploadResult.secure_url;
        }

        let completeFileName = "";
        if (files?.file?.[0]) {
            const bookFileName = files.file[0].filename;
            const bookFilePath = path.resolve(directory, "../../public/data/uploads", bookFileName);

            const bookFileUploadResult = await cloudinary.uploader.upload(bookFilePath, {
                resource_type: "raw",
                filename_override: bookFileName,
                folder: "book-pdfs",
                format: "pdf"
            });
            completeFileName = bookFileUploadResult.secure_url;
        }

        const updatedBook = await BookModel.findByIdAndUpdate(
            bookId,
            {
                title: title,
                description: description,
                genre: genres.length > 0 ? genres : book.genre,
                coverImage: completeCoverImage
                    ? completeCoverImage
                    : book.coverImage,
                file: completeFileName ? completeFileName : book.file,
            },
            { new: true }
        );

        return res.status(201).json({
            message: "Book updated successfully.",
            updatedBook: updatedBook
        });
    } catch (err) {
        return next(createHttpError(500, (err as Error).message));
    }
}

const listBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const limit = Math.max(1, Math.min(100, parseInt(req.query.limit as string) || 10));
        const skip = (page - 1) * limit;

        const [books, totalBooks] = await Promise.all([
            BookModel.find().skip(skip).limit(limit).populate("author", "name"),
            BookModel.countDocuments(),
        ]);

        res.status(200).json({
            message: "Fetched successfully",
            books,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalBooks / limit),
                totalBooks,
                limit,
            },
        });
    } catch (err) {
        return next(createHttpError(500, "Error while getting a book"));
    }
}

const getSingleBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;


    try {
        const book = await BookModel.findById(bookId).populate("author", "name");
        if (!book) {
            return next(createHttpError(404, "Book not found."));
        }

        res.status(200).json({
            message: "Book fetched successfully.",
            book: book
        });
    } catch (err) {
        return next(createHttpError(500, "Error while getting a book"));
    }
}

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;

    try {
        const book = await BookModel.findById(bookId).populate("author", "name");
        if (!book) {
            return next(createHttpError(404, "Book not found."));
        }

        const _req = req as AuthRequest;
        const authorId = book.author instanceof Types.ObjectId ? book.author.toString() : (book.author as { _id: string })._id.toString();
        if (authorId !== _req.userId) {
            return next(createHttpError(403, "You can not Delete others book."));
        }

        const coverFileSplits = book.coverImage.split("/");
        const coverImagePublicId =
            coverFileSplits.at(-2) +
            "/" +
            coverFileSplits.at(-1)?.split(".").at(-2);

        const bookFileSplits = book.file.split("/");
        const bookFilePublicId =
            bookFileSplits.at(-2) + "/" + bookFileSplits.at(-1);

        await cloudinary.uploader.destroy(coverImagePublicId);
        await cloudinary.uploader.destroy(bookFilePublicId, {
            resource_type: "raw",
        });

        await DownloadModel.deleteMany({ book: new Types.ObjectId(String(bookId)) });
        await BookModel.deleteOne({ _id: String(bookId) });

        res.status(200).json({
            message: "Book deleted successfully."
        });
    } catch (err) {
        return next(createHttpError(500, "Error while deleting a book"));
    }
}

const downloadBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;

    try {
        const book = await BookModel.findById(bookId);
        if (!book) {
            return next(createHttpError(404, "Book not found."));
        }

        const cloudinaryResponse = await fetch(book.file);
        if (!cloudinaryResponse.ok || !cloudinaryResponse.body) {
            return next(createHttpError(502, "Failed to fetch file from storage."));
        }

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename="${book.title}.pdf"`);

        await DownloadModel.create({ book: book._id });

        Readable.fromWeb(cloudinaryResponse.body as any).pipe(res);
    } catch (err) {
        return next(createHttpError(500, "Error while downloading a book"));
    }
}

export { createBook, updateBook, listBook, getSingleBook, deleteBook, downloadBook };