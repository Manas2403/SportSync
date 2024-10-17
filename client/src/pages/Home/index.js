// src/pages/Home.js
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container } from "@mui/material";
import Navbar from "../../components/Navbar/index.js";
import { fetchEvents, createBooking } from "../../Api.js";

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error("Error loading events:", error);
            }
        };
        loadEvents();
    }, []);

    const handleDateClick = async (dateClickInfo) => {
        const title = prompt("Enter Event Title");
        if (title) {
            const courtId = prompt("Enter Court ID");
            const user = prompt("Enter Your Name");

            const startTime = dateClickInfo.dateStr;
            const endTime = new Date(
                new Date(startTime).getTime() + 60 * 60 * 1000
            ).toISOString();

            const isOverlapping = events.some((event) => {
                return (
                    new Date(startTime) < new Date(event.end) &&
                    new Date(endTime) > new Date(event.start)
                );
            });

            if (isOverlapping) {
                alert(
                    "Booking overlaps with an existing event. Please choose a different time slot."
                );
            } else {
                try {
                    const newEvent = await createBooking(
                        courtId,
                        startTime,
                        user
                    );
                    setEvents((prevEvents) => [...prevEvents, newEvent]);
                } catch (error) {
                    console.error("Error during booking creation:", error);
                }
            }
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <Container className="mt-6 max-w-full px-6">
                <div className="w-full">
                    <FullCalendar
                        plugins={[timeGridPlugin, interactionPlugin]}
                        initialView="timeGridWeek"
                        events={events}
                        editable
                        selectable
                        dateClick={handleDateClick}
                        slotDuration="01:00:00"
                        className="w-full"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Home;
