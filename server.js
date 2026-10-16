const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

// for Atlas, replace this with your Atlas connection string
const MONGO_URI = "mongodb://127.0.0.1:27017/studentdb";

app.use(express.json()); // parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Student API is running");
});

app.use("/api/students", studentRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.log("MongoDB connection error:", err.message));