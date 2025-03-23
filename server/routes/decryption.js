const router = require("express").Router();
const protect = require("../middlewares/authMiddleware");
const { decryptText } = require("../controllers/decryptText");

router.post("/decrypt-text", protect, decryptText);

module.exports = router;
