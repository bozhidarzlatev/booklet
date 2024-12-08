import { Router } from "express";
import homeController from "../controllers/homeController.js";
import authController from "../controllers/authController.js";
import bookController from "../controllers/bookController.js";
import profileController from "../controllers/profileController.js";

const routes = Router();




routes.use('/', homeController)
routes.use('/api/auth', authController)
routes.use('/api/books', bookController)
routes.use('/api/user', profileController)

export default routes;