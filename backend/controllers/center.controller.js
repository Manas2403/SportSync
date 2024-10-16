import Center from '../models/center.model.js';
import CenterSports from "../models/centerSports.model.js";
import Sport from "../models/sport.model.js"; // For sport validation
import { response_201, response_500, response_400 } from "../utils/responseCodes.js";

export async function createCenter(req, res) {
  const { name, sports } = req.body; // `sports` should be an array of sportIds

  try {
    // Create the center
    const newCenter = new Center({
      name
    });

    // Save the center to get the centerId for the relationships
    await newCenter.save();

    // Check if sports array exists and is an array
    if (!sports || !Array.isArray(sports)) {
      return response_400(res, "Sports field must be an array of sportIds.");
    }

    // Validate each sportId and create the CenterSports relationship
    const centerSportsRelations = await Promise.all(sports.map(async (sportId) => {
      // Check if the sport exists
      const foundSport = await Sport.findById(sportId);
      if (!foundSport) {
        throw new Error(`Sport with id ${sportId} not found`);
      }

      // Create and save the center-sport relationship
      const newCenterSport = new CenterSports({
        centerId: newCenter._id,
        sportId: sportId
      });

      await newCenterSport.save();
      return newCenterSport;
    }));

    // Return success response
    return response_201(res, "Center and associated sports created successfully", {
      center: newCenter,
      centerSportsRelations,
    });

  } catch (err) {
    return response_500(res, "Failed to create center", err.message);
  }
}


export async function getAllCenters(req, res) {
    try {
      const centers = await Center.find();;
      res.status(200).json({ message: 'Centers fetched successfully', data: centers });
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch centers', error: err.message });
    }
  }