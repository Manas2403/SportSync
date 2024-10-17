// src/pages/Home.js
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
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
                <div className="w-full">
                    <FullCalendar
                        plugins={[timeGridPlugin, interactionPlugin]}
                        initialView="timeGridWeek" // Set the default view to timeGridWeek
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
