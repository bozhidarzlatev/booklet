import Book from "../models/Book.js";
import Review from "../models/Review.js";


async function createReview(reviewData , rating, bookId, user, username) {
 
    return Review.create( {review: reviewData,  rating, bookId, ownerId: user, ownerName: username} )
    
}


async function updateRating(bookId, rating) {
    const bookRatings = await Review.find({bookId: bookId})
    let count = 0;
    let totalRating = 0;
    bookRatings.forEach(element => {
        totalRating += element.rating;
        count++;
    });

    const ratingToUpdate = (totalRating / count).toFixed(1)
    
    const updateRating = await Book.findByIdAndUpdate(bookId, {rating: ratingToUpdate}, { new: true } )
    
    return bookRatings
    
}

const reviewService = {
    createReview,
    updateRating
}

export default reviewService;