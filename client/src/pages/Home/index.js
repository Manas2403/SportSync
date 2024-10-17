// src/pages/Home.js
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/index.js";

const Home = () => {
    const [events, setEvents] = useState([]);

    const handleDateClick = (dateClickInfo) => {
        const title = prompt("Enter Event Title");
        if (title) {
            setEvents([...events, { title, date: dateClickInfo.dateStr }]);
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <Container className="mt-6 max-w-full px-6">
                <Typography variant="h4" gutterBottom>
                    Event Calendar
                </Typography>
                <div className="w-full">
                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                        ]}
                        initialView="dayGridMonth"
                        events={events}
                        dateClick={handleDateClick}
                        editable
                        selectable
                        className="w-full"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Home;
