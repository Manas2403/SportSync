// Importing the Router module from the Express framework
import { Router } from "express";

// Importing controller functions for court operations
import {
    createCourt,
    getAllCourts,
} from "../controllers/court.controller.js";

// Creating a new router instance for court-related routes
const router = new Router();

// Route to retrieve all courts - handled by the getAllCourts controller
router.get("/", getAllCourts);

// Route to create a new court - handled by the createCourt controller
router.post("/", createCourt);

// Exporting the router for use in other parts of the application
export default router;
