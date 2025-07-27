// backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();


// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit process with failure if DB connection fails
  });

const PORT = process.env.PORT || 5004;

// --- Middleware ---
app.use(cors({
  origin: "*", // For development, allow all origins or set specific frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
app.use("/api/users", require("./routes/user"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));

// --- Serve Frontend ---
const frontendPath = path.join(__dirname, "../Frontend/dist");
app.use(express.static(frontendPath));

// --- React Router fallback ---
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
// backend/server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config(); // Load environment variables from .env file

const app = express(); // Initialize Express application

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit process with failure if DB connection fails
  });

const PORT = process.env.PORT || 5004;

// --- Middleware ---
app.use(cors({
  origin: "*", // For development, allow all origins or set specific frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
app.use("/api/users", require("./routes/user"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));

// --- Serve Frontend ---
const frontendPath = path.join(__dirname, "../Frontend/dist");
app.use(express.static(frontendPath));

// --- React Router fallback ---
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
