const router = require("express").Router();

const { replaceChars } = require("../controllers/replaceChars");
const { encryptText } = require("../controllers/encryptText");

const authMiddleWare = require("../middlewares/authMiddleware");

router.post("/replace-chars", replaceChars);
router.post("/encrypt-text", authMiddleWare, encryptText);

module.exports = router;
