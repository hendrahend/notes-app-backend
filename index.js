const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
const corsOptions = {
  origin: *,  // Change this to your actual frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"],  // Allow headers
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.get("/", async (req, res) => {
  res.send("Halo..");
});

const noteRoutes = require("./routes/notes");
app.use("/api/notes", noteRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//Update for deployment
module.exports = (req, res) => app(req, res);
