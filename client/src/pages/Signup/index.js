// src/pages/Signup.js
import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const Signup = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Signup
            </Typography>
            <form>
                <TextField label="Name" fullWidth margin="normal" />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth>
                    Signup
                </Button>
            </form>
        </Container>
    );
};

export default Signup;
