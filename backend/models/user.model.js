// Importing necessary modules from Mongoose
import { model, Schema } from "mongoose";

// Defining the User schema to represent users in the database
const UserSchema = new Schema(
  {
    // User's name must be a string and is required
    name: {
      type: String,
      required: true,
    },
    // User's email must be a string and is required
    email: {
      type: String,
      required: true,
    },
    // Hash of the user's password (optional)
    passwordHash: {
      type: String,
    },
    // User role can be either 'customer' or 'manager', defaulting to 'customer'
    role: { 
      type: String, 
      enum: ['customer', 'manager'], 
      default: 'customer' 
    },
  },
  {
    // Automatically manage createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Creating a model for the User schema and exporting it for use in other parts of the application
const User = model("User", UserSchema);
export default User;
