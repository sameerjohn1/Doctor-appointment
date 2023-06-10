const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

// Get method || Users
router.get("/getAllUsers", authMiddleware, getAllUsersController);

// Get Method || Docotrs
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// Post Account status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
