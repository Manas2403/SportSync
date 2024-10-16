// Import the necessary modules from the Mongoose library
import { model, Schema } from "mongoose";

// Create a schema for sports centers in the database
const centerSchema = new Schema(
  {
    // Define the name of the center, which is a required string
    name: {
      type: String,
      required: true,
    },
    // Define an array to hold the sports associated with the center
    sports: [
      {
        // Each sport is linked to the Sport model using its ObjectId
        type: Schema.Types.ObjectId,
        ref: "Sport",
      },
    ],
  },
  {
    // Enable automatic creation of timestamps for the records
    timestamps: true,
  }
);

// Generate a Mongoose model based on the Center schema and export it for use in other modules
const Center = model("Center", centerSchema);
export default Center;
