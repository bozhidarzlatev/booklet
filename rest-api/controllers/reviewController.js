import { Router } from "express";
import authenticateToken from "../middlewares/authenticate.js";
import reviewService from "../services/reviewService.js";
import User from "../models/User.js";
import Book from "../models/Book.js";
import Review from "../models/Review.js";

const reviewController = Router();



reviewController.post('/', authenticateToken,  async (req, res) =>{
    const {review , rating, bookId} = req.body;
    const user = req.user
    const username = req.username

    try {
        const reviewData = await reviewService.createReview(review , rating, bookId, user, username)
        
        if (reviewData) {
            const updatedUser = await User.findByIdAndUpdate(
                user,
                { $push: { reviews: reviewData._id } },  // Use $push to add bookId to the cart array
                { new: true }  // Return the updated user
            )

            const updatedBook = await Book.findByIdAndUpdate(
                bookId,
                { $push: { reviews: reviewData._id } },  // Use $push to add bookId to the cart array
                { new: true }  // Return the updated user
            )

            if (!updatedBook || !updatedUser) {
                throw new Error("Updating data fail!");
            }
            const ratingData = await reviewService.updateRating(bookId, reviewData.rating)
            res.status(200).send(reviewData)
        } else {
            throw new Error("Review Upload fail!");
            
        }
        
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err })
        
    }

});

reviewController.get('/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
    try {
        // Fetch reviews for the given bookId (assuming you're using a Review model)
        const reviews = await Review.find({ bookId: bookId }).lean();

        if (!reviews) {
            return res.status(404).send({ message: 'Reviews not found' });
        }
        
        res.status(200).send(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching reviews', error: err });
    }
})

reviewController.get('/user',authenticateToken, async (req, res) =>{
    // const userId = req.user
    
    // try {
    //     const userReviews = await Review.find({ownerId: userId}).lean();
    //     res.status(200).send(userReviews);
        
    // } catch (error) {
    //     console.error(err);
    //     res.status(500).json({ message: 'Error fetching reviews', error: err });
    // }
    
    res.status(200).send({message: `sads`});
})



export default reviewController;

