// Importing necessary modules from Mongoose
import { model, Schema } from "mongoose";

// Creating a schema for sports in the database
const SportSchema = new Schema({
    name: {
      type: String,
      required: true,
    }
  }, { timestamps: true });

// Generate a Mongoose model based on the Sport schema and export it for use in other parts of the application
const Sport = model("Sport", SportSchema);
export default Sport;
