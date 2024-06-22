// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const scheduleTasks = require("./cron/schdeule.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected...");
        scheduleTasks();
    })
    .catch((err) => console.log(err));

// Define routes
app.use("/api/coins", require("./routes/coins"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
