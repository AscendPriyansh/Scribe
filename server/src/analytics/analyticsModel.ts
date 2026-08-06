import { Schema, model, Types } from "mongoose";

const visitSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

const downloadSchema = new Schema({
    book: {
        type: Types.ObjectId,
        ref: "Book",
        required: true
    }
}, { timestamps: true });

export const VisitModel = model("Visit", visitSchema);
export const DownloadModel = model("Download", downloadSchema);
