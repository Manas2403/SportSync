import jwt from 'jsonwebtoken';  // Importing JWT for token verification
import User from '../models/user.model.js';  // Importing the User model
import {
    response_200,
    response_400,
    response_401,
    response_500
} from '../utils/responseCodes.js';  // Importing reusable response functions

// Middleware to authenticate the request using JWT token
const authMiddleware = async (req, res, next) => {
  try {
    // Extract the Authorization header from the request
    const authHeader = req.header('Authorization');

    // Check if the Authorization header is missing or invalid
    if (!authHeader || !/(Bearer )\w+/.test(authHeader)) {
      return response_400(res, 'Invalid request: Missing or malformed Authorization header');
    }

    // Extract the JWT token from the Authorization header
    const authToken = authHeader.replace('Bearer ', '');

    let userId; // To store the extracted user ID from the token

    try {
      // Verify the JWT token and extract the payload
      const { payload } = jwt.verify(authToken, process.env.SECRET);
      
      req.isAuthenticated = true;  // Flag to indicate successful authentication
      userId = payload.id;         // Extract the user ID from the token's payload
    } catch (err) {
      // If token verification fails, respond with unauthorized error
      return response_401(res, 'Unauthorized: Invalid or expired token');
    }

    // Fetch the user from the database using the extracted user ID
    const user = await User.findById(userId);

    // If no user is found, respond with unauthorized error
    if (!user) {
      return response_401(res, 'Unauthorized: User not found');
    }

    // Attach the user object to the request for further use in downstream handlers
    req.user = user;
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    // Handle any server-side errors and respond with internal server error
    return response_500(res, 'Internal Server Error', err);
  }
};

export default authMiddleware;
