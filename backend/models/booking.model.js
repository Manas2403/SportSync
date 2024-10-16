import { model, Schema } from "mongoose"; // Importing necessary modules from mongoose

// Define the Booking schema
const BookingSchema = new Schema(
  {
    // User associated with the booking
    user: {
      type: String,             // User is identified by a string (could be user ID)
      required: true,          // This field is mandatory
    },
    // Reference to the court being booked
    court: {
      type: Schema.Types.ObjectId, // Storing a reference to the Court model
      ref: "Court",                // Reference name for population
      required: true,              // This field is mandatory
    },
    // Start time of the booking
    startTime: {
      type: Date,                // Date type for the start time
      required: true,            // This field is mandatory
    },
    // End time of the booking
    endTime: {
      type: Date,                // Date type for the end time
      required: true,            // This field is mandatory
    },
  },
  {
    timestamps: true,            // Automatically create createdAt and updatedAt fields
  }
);

// Exporting the Booking model
export default model("Booking", BookingSchema);
