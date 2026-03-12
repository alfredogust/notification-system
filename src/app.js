require("dotenv").config();

const express = require("express");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notifications", notificationRoutes);
app.use("/auth", authRoutes);

module.exports = app;