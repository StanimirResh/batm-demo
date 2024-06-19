// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

// Define routes
app.use("/api/coins", require("./routes/coins"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
