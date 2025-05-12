const StudentDB = require("../models/StudentModels");

const getStudents = async (req, res) => {
  try {
    const students = await StudentDB.find({}, "_id name");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await StudentDB.findById(req.params.stdid)
      .populate("Doctors")
      .exec();
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const createStudent = async (req, res) => {
  try {
    const newStudent = await StudentDB.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await StudentDB.findByIdAndUpdate(
      req.params.stdid,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await StudentDB.findByIdAndDelete(req.params.stdid);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
