const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [25, "Age must be at least 25"],
    max: [100, "Age must be less than or equal to 100"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },
});

module.exports = mongoose.model("Doctors", DoctorsSchema);
