// Importing the Router module from Express framework
import { Router } from "express";

// Importing controller functions for center operations
import {
    createCenter,
    getAllCenters,
} from "../controllers/center.controller.js";

// Creating a new router instance for center-related routes
const router = new Router();

// Route to retrieve all centers - handled by the getAllCenters controller
router.get("/", getAllCenters);

// Route to create a new center - handled by the createCenter controller
router.post("/", createCenter);

// Exporting the router to be used in other parts of the application
export default router;
