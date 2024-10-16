# SportSync (IIT2021146)


## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Environment Variables](#environment-variables)
5. [Installation](#installation)
6. [Running the Application](#running-the-application)
7. [Deployment](#deployment)
8. [Assumptions & Limitations](#assumptions--limitations)
9. [Deployed Links](#deployed-links)

---

## Introduction
This project is a **SportSync** that allows users to book sports courts at various centers. It supports viewing available courts, managing bookings, and handling different sports for specific centers.

The backend is built using **Node.js**, **Express**, and **MongoDB**, while the frontend (if included) can be built using frameworks like **React** or **Angular**. The backend handles APIs for managing centers, courts, sports, and bookings.

---

## Features
- **User Authentication**: Users can register and log in.
- **CRUD Operations**: Manage centers, courts, sports, and bookings.
- **Bookings Management**: Create and view bookings based on center and sports availability.
- **Conflict Prevention**: Prevents double-booking of courts by checking for conflicting time slots.

---

---

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or later)
- [MongoDB](https://www.mongodb.com/) (either a local instance or a cloud-based cluster like MongoDB Atlas)
- [Git](https://git-scm.com/) (for cloning the repository)

---

## Environment Variables
You will need a `.env` file in the root directory with the following variables:

```bash
# MongoDB connection string
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority

# JWT Secret for token signing
SECRET=<your_jwt_secret>

# Application Port
PORT=8080
```

## Environment Variables
Clone the repository:

```bash
git clone https://github.com/Manas2403/SportSync.git
cd SportSync
```
Install dependencies:

```bash
npm install
```
Set up your environment variables by creating a .env file as explained above.



## Running the Application
Start the MongoDB server: If you are using a local MongoDB instance, make sure it is running. For MongoDB Atlas, ensure your connection URI is correct in the .env file.

Run the backend:

```bash
npm start
```
The backend API should now be running on the specified host and port. By default, it will run at http://127.0.0.1:8080.



## Deployment
Backend
Make sure your MongoDB URI in the .env file points to a production-ready MongoDB cluster (e.g., MongoDB Atlas).
Deploy the backend on a platform like Heroku, AWS, or DigitalOcean.
Update the .env file for the production environment with the new PORT and MONGO_URI.





## Deployed Links
Backend: https://sportsync-jrij.onrender.com/
