import { Router } from "express";
import homeController from "../controllers/homeController.js";
import authController from "../controllers/authController.js";
import bookController from "../controllers/bookController.js";

const routes = Router();




routes.use('/', homeController)
routes.use('/api/auth', authController)
routes.use('/api/books', bookController)

export default routes;