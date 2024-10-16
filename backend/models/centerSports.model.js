// Import the necessary modules from the Mongoose library
import { model, Schema } from "mongoose";

const centerSportSchema = new Schema({
    centerId: {
      type: Schema.Types.ObjectId,
      ref: "Center",
      required: true,
    },
    sportId: {
      type: Schema.Types.ObjectId,
      ref: "Sport",
      required: true,
    }
  });


  // Generate a Mongoose model based on the centerSport schema and export it for use in other modules
const CenterSports = model("CenterSports", centerSportSchema);
export default CenterSports;
