import { Router } from "express";
import homeController from "../controllers/homeController.js";
import authController from "../controllers/authController.js";
import bookController from "../controllers/bookController.js";
import profileController from "../controllers/profileController.js";
import reviewController from "../controllers/reviewController.js";

const routes = Router();




routes.use('/', homeController)
routes.use('/api/auth', authController)
routes.use('/api/books', bookController)
routes.use('/api/user', profileController)
routes.use('/api/reviews', reviewController)
routes.use('/api/search', bookController)

export default routes;