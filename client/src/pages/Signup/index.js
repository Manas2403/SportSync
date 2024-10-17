// src/pages/Signup.js
import React, { useState } from "react";
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Alert,
} from "@mui/material";
import { signup } from "../../Api.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        try {
            await signup(formData);
            setSuccess(true);
            setTimeout(() => {
                navigate("/login"); // Navigate to login page after 2 seconds
            }, 2000);
        } catch (error) {
            setError(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="grey.100"
        >
            <Container
                maxWidth="sm"
                sx={{
                    backgroundColor: "white",
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Signup
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                {success && (
                    <Alert severity="success">
                        Signup successful! Redirecting to login...
                    </Alert>
                )}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Signup
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default Signup;
