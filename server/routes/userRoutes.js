const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
  updateProfileImage,
  changePassword,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const uploadMiddleware =require("../middlewares/uploadMiddleware");

const router = express.Router();


// Protected Routes
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.delete("/profile", authMiddleware, deleteUserAccount);
router.post("/update-profile-image",authMiddleware,uploadMiddleware,updateProfileImage)
router.post("/change-password",authMiddleware,changePassword)
module.exports = router;
