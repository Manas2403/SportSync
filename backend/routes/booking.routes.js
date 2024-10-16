// Importing necessary modules from Express
import { Router } from 'express';

// Importing controller functions for booking operations
import { createBooking, viewBookings } from '../controllers/booking.controller.js';

// Creating a new router instance
const router = new Router();

// Route to view all bookings - handled by the viewBookings controller
router.get('/', viewBookings);

// Route to create a new booking - handled by the createBooking controller
router.post('/', createBooking);

// Exporting the router for use in other parts of the application
export default router;
