const express = require("express");
const { getUserDocuments, downloadDocument, deleteDocument } = require("../controllers/documentController");
const authMiddleware = require("../middlewares/authMiddleware"); // Ensure the user is authenticated
const uploadMiddleware = require("../middlewares/uploadMiddleware");
const { uploadDocument } = require("../controllers/uploadController");

const router = express.Router();

router.post('/upload', authMiddleware, uploadMiddleware, uploadDocument);
router.get("/my-documents", authMiddleware, getUserDocuments);
router.get("/download/:fileKey",authMiddleware,downloadDocument);
router.delete("/delete/:fileKey", authMiddleware, deleteDocument);

module.exports = router;
