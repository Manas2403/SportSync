// Importing necessary modules from Mongoose
import { model, Schema } from "mongoose";

// Creating a schema for sports in the database
const SportSchema = new Schema(
  {
    // Define the name of the sport, which is a required string
    name: {
      type: String,
      required: true,
    },
  },
  {
    // Enable automatic creation of timestamps for the records
    timestamps: true,
  }
);

// Generate a Mongoose model based on the Sport schema and export it for use in other parts of the application
const Sport = model("Sport", SportSchema);
export default Sport;
