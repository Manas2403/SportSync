// Importing necessary modules from Mongoose
import { model, Schema } from "mongoose";

// Defining the Center schema to represent sports centers in the database
const centerSchema = new Schema(
  {
    // Center name must be a string and is required
    name: {
      type: String,
      required: true,
    },
    // Array of sports associated with the center
    sports: [
      {
        // Each sport is referenced by its ObjectId from the Sport model
        type: Schema.Types.ObjectId,
        ref: "Sport",
      },
    ],
  },
  {
    // Automatically manage createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Creating a model for the Center schema and exporting it for use in other parts of the application
const Center = model("Center", centerSchema);
export default Center;
