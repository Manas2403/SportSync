import express from 'express';        // Importing the Express library
import * as dotenv from 'dotenv';     // Importing dotenv to load environment variables
import cors from 'cors';              // Importing CORS to handle cross-origin requests
import bodyParser from 'body-parser'; // Importing body-parser to handle JSON requests
import courtRoutes from './routes/court.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import sportRoutes from './routes/sport.routes.js';
import centerRoutes from './routes/center.routes.js';

// Load environment variables from .env file
dotenv.config();

// Initialize an Express application
const app = express();

// Middlewares for parsing JSON and URL-encoded requests, and handling CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import and connect to the database
import connectDB from './db.config.js';
connectDB();  // Initialize database connection

// Routes for different modules
app.use('/center', centerRoutes);  // Center-related routes
app.use('/sport', sportRoutes);    // Sport-related routes
app.use('/court', courtRoutes);    // Court-related routes
app.use('/booking', bookingRoutes); // Booking-related routes

// Start the server, using environment variables if provided, otherwise default values
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}/`);
});
