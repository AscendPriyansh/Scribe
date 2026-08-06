import { Schema, model, Types } from "mongoose";

const visitSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    visitor: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, { timestamps: true });

visitSchema.index({ owner: 1, visitor: 1, date: 1 }, { unique: true });

const downloadSchema = new Schema({
    book: {
        type: Types.ObjectId,
        ref: "Book",
        required: true
    }
}, { timestamps: true });

export const VisitModel = model("Visit", visitSchema);
export const DownloadModel = model("Download", downloadSchema);
