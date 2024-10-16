import Booking from "../models/booking.model.js";
import Court from "../models/court.model.js";
import CenterSport from "../models/centerSports.model.js"; // New model to handle center-sport relationships
import {
  response_200,
  response_400,
  response_500,
} from "../utils/responseCodes.js";

export async function viewBookings(req, res) {
  const { date, sport, center } = req.query;

  try {
    // Check for valid date format
    if (!Date.parse(date)) {
      return response_400(res, "Invalid date format. Please use ISO 8601 format (YYYY-MM-DD).");
    }

    // Find if the given center and sport relationship exists
    const foundCenterSport = await CenterSport.findOne({
      centerId: center,
      sportId: sport,
    });

    if (!foundCenterSport) {
      return response_400(res, "The sport is not offered at the selected center.");
    }

    // Find all courts that match the center-sport relationship
    const courts = await Court.find({
      centerSportId: foundCenterSport._id, // Assume courts are linked to the new center-sport model
    }).select("_id");

    const courtIds = courts.map((court) => court._id);
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);

    // Find bookings for the selected date and courts
    const bookings = await Booking.find({
      startTime: {
        $gte: startDate,
        $lt: endDate,
      },
      court: { $in: courtIds },
    });

    const responseData = {
      bookings,
      courts,
    };
    return response_200(res, "Bookings fetched successfully", responseData);
  } catch (err) {
    return response_500(res, "Server Error", err);
  }
}


export async function createBooking(req, res) {
  const { courtId, startTime, user } = req.body;
  const duration = 60; // Default duration in minutes

  try {
    // Check if the court exists
    const court = await Court.findById(courtId);
    if (!court) {
      return response_400(res, "Court not found");
    }

    const bookingStart = new Date(startTime);
    if (isNaN(bookingStart.getTime())) {
      return response_400(res, "Invalid start time format");
    }

    // Set the end time based on the duration
    const bookingEnd = new Date(bookingStart);
    bookingEnd.setMinutes(bookingStart.getMinutes() + duration);

    // Check for conflicting bookings
    const conflictingBooking = await Booking.findOne({
      court: courtId,
      $or: [
        { startTime: { $lt: bookingEnd, $gte: bookingStart } },
        { endTime: { $gt: bookingStart, $lte: bookingEnd } },
      ],
    });

    if (conflictingBooking) {
      return response_400(res, "Time slot is already booked.");
    }

    // Create a new booking
    const newBooking = new Booking({
      user,
      court: courtId,
      startTime: bookingStart,
      endTime: bookingEnd,
    });

    await newBooking.save();
    return response_200(res, "Booking created successfully", newBooking);
  } catch (error) {
    return response_500(res, "Failed to create booking", error);
  }
}
