// src/api.js
import axios from "axios";

const base_url = "https://sportsync-jrij.onrender.com";

export const signup = async (userData) => {
    try {
        const response = await axios.post(
            `${base_url}/auth/register`,
            userData
        );
        return response.data;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}/auth/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export const fetchEvents = async ({
    date = new Date().toISOString(),
    sport = "Badminton",
    center = "Indiranagar",
} = {}) => {
    try {
        const response = await axios.get(`${base_url}/booking`, {
            params: {
                date,
                sport,
                center,
            },
        });

        return response.data.map((event) => ({
            title: `${event.user}`,
            start: event.startTime,
            end: event.endTime,
        }));
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
};
export const createBooking = async (courtId, startTime, user) => {
    try {
        const response = await axios.post(`${base_url}/booking`, {
            courtId,
            startTime,
            user,
        });
        return response.data;
    } catch (error) {
        console.error("Error creating booking:", error);
        throw error;
    }
};
