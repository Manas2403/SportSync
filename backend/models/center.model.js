// Importing necessary modules from Mongoose
import { model, Schema } from "mongoose";

// Defining the Center schema to represent sports centers in the database
// Center Schema
const centerSchema = new Schema({
    name: {
      type: String,
      required: true,
    }
  }, { timestamps: true });

// Creating a model for the Center schema and exporting it for use in other parts of the application
const Center = model("Center", centerSchema);
export default Center;
