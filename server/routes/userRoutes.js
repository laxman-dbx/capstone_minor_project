const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
  updateProfileImage,
  changePassword,
  getUsers,
  getNotification,
  userMarkAsRead,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const uploadMiddleware = require("../middlewares/uploadMiddleware");
const { decryptText } = require("../controllers/decryptText");
const { replaceChars } = require("../controllers/replaceChars");
const { encryptText } = require("../controllers/encryptText");
const { senderDeletion } = require("../controllers/senderDeletion");
const { sharedByMe } = require("../controllers/sharedByMe");
const { sharedToMe } = require("../controllers/sharedToMe");

const router = express();

// Protected Routes
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.delete("/profile", authMiddleware, deleteUserAccount);
router.post(
  "/update-profile-image",
  authMiddleware,
  uploadMiddleware,
  updateProfileImage,
);
router.post("/change-password", authMiddleware, changePassword);
router.get("/getUsers", authMiddleware, getUsers);
router.post("/decrypt-text", authMiddleware, decryptText);
router.post("/replace-chars", replaceChars);
router.post("/encrypt-text", authMiddleware, encryptText);
router.delete("/deleteEntry/:messageId", authMiddleware, senderDeletion);
router.get("/shared-by-me", authMiddleware, sharedByMe);
router.get("/shared-to-me", authMiddleware, sharedToMe);

//notifications routes
router.get("/notifications", authMiddleware, getNotification);
router.put("/notification/:id/read", authMiddleware, userMarkAsRead);

module.exports = router;
