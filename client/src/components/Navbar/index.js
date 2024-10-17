// src/components/Navbar.js
import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index.js";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index.js";
import dayjs from "dayjs";

const Navbar = () => {
    const [center, setCenter] = useState("");
    const [sport, setSport] = useState("");
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const handleCenterChange = (e) => {
        setCenter(e.target.value);
    };

    const handleSportChange = (e) => {
        setSport(e.target.value);
    };

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: "#1976d2", padding: "16px" }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    gap: 2,
                }}
            >
                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                        width: "150px",
                    }}
                >
                    <InputLabel>Center</InputLabel>
                    <Select
                        value={center}
                        onChange={handleCenterChange}
                        label="Center"
                    >
                        <MenuItem value="">
                            <em>Select Center</em>
                        </MenuItem>
                        <MenuItem value="Center 1">Center 1</MenuItem>
                        <MenuItem value="Center 2">Center 2</MenuItem>
                    </Select>
                </FormControl>

                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                        width: "150px",
                    }}
                >
                    <InputLabel>Sports</InputLabel>
                    <Select
                        value={sport}
                        onChange={handleSportChange}
                        label="Sports"
                    >
                        <MenuItem value="">
                            <em>Select Sport</em>
                        </MenuItem>
                        <MenuItem value="Football">Football</MenuItem>
                        <MenuItem value="Basketball">Basketball</MenuItem>
                    </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={(newDate) => setSelectedDate(newDate)}
                        disablePast
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                size="small"
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 1,
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
