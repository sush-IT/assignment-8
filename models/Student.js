const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: Number, required: true, unique: true },
    email: { type: String, required: true },
    course: { type: String },
    year: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);