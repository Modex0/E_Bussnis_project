const DoctorsDB = require("../models/DoctorsModels");

const getDoctors = async (req, res) => {
  try {
    const doctors = await DoctorsDB.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctor = await DoctorsDB.findById(req.params.docid);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDoctor = async (req, res) => {
  try {
    const newDoctor = await DoctorsDB.create(req.body);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await DoctorsDB.findByIdAndUpdate(
      req.params.docid,
      req.body,
      { new: true }
    );
    if (!updatedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await DoctorsDB.findByIdAndDelete(req.params.docid);
    if (!deletedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
