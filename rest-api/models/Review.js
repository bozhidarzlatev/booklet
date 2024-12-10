import { model, Schema, Types } from "mongoose";

const reviewSchema = new Schema({
    review: {
        type: String,
        required: [true],
    },
    rating: {
        type: Number,
        required: [true],
    },
    bookId: {
        type: Types.ObjectId,
        ref: 'Book'
    },
    ownerId: {
        type: Types.ObjectId,
        ref: 'User'
    },
    ownerName: {
        type: String,
        ref: 'User'
    }

}, { timestamps: { createdAt: 'created_at' } });

const Review = model('Review' , reviewSchema);

export default Review