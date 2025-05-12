const express = require("express");
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/StudentController");

const router = express.Router();

router.get("/", getStudents); // get all students
router.get("/:stdid", getStudentById); // get student by id
router.post("/", createStudent); // create new student
router.put("/:stdid", updateStudent); // update student data
router.delete("/:stdid", deleteStudent); // delete student

module.exports = router;