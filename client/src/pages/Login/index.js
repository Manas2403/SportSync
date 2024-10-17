// src/pages/Login.js
import React, { useState } from "react";
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Alert,
} from "@mui/material";
import { login } from "../../Api.js"; // Create this function in api.js
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
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
            const response = await login(formData); // Call the login function
            console.log(response); // You can handle token storage here if needed
            setSuccess(true);
            // Redirect to the home page after successful login
            setTimeout(() => {
                navigate("/"); // Navigate to home page
            }, 2000);
        } catch (error) {
            setError(error.response?.data?.message || "Login failed");
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
                    Login
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                {success && (
                    <Alert severity="success">
                        Login successful! Redirecting to home...
                    </Alert>
                )}
                <form onSubmit={handleSubmit}>
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
                        Login
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default Login;
