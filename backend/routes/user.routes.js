// Importing the Router module from the Express framework
import { Router } from "express";

// Importing controller functions for sports-related operations
import {
    registerUser,
    loginUser,
} from "../controllers/user.controller.js";

// Creating a new router instance for managing sports routes
const router = new Router();

// Route to fetch all sports - handled by the getAllSports controller
router.post("/register", registerUser);

// Route to create a new sport - handled by the createSport controller
router.post("/login", loginUser);

// Exporting the router for use in other parts of the application
export default router;
