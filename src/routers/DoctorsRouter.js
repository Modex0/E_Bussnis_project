const express = require("express");
const {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/DoctorsController");

const router = express.Router();

router.get("/", getDoctors);
router.get("/:docid", getDoctorById);
router.post("/", createDoctor);
router.put("/:docid", updateDoctor);
router.delete("/:docid", deleteDoctor);

module.exports = router;
