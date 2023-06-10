const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const router = express.Router();

// Post Single Doc Info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// Post Update Profile
router.post("/updateProfile", authMiddleware, updateProfileController);

// Post Get Single Doc Info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// Get Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

// Post update status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
