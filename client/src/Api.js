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

// New login function
export const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}/auth/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
