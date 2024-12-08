import { Schema , Types, model } from "mongoose";
import bcrypt from 'bcrypt';

const bookSchema = new Schema({
    imageUrl: {
        type: String,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    
    },
    genre: {
        type: String,
    
    },
    year: {
        type: Number,
    
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    ownerName: {
        type: String,
        ref: 'User'
    }
}, { timestamps: { createdAt: 'created_at' } });

const Book = model('Book', bookSchema);

export default Book;

