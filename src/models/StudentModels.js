const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: [16, "Age must be at least 16"],
    max: [25, "Age must be less than or equal to 25"],
  },
  level: {
    type: String,
    enum: ["Freshman", "Sophomore", "Junior", "Senior"],
    default: "Freshman",
  },
  address: {
    type: String,
    trim: true,
  },
  Doctors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctors",
  },
});

module.exports = mongoose.model("Student", StudentSchema);
