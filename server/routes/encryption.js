const router = require("express").Router();

const { replaceChars } = require("../controllers/replaceChars");
const { encryptText } = require("../controllers/encryptText");
const { encryptKey } = require("../controllers/encryptKey");

const authMiddleWare = require("../middlewares/authMiddleware");

router.post("/replace-chars", replaceChars);
router.post("/encrypt-text", authMiddleWare, encryptText);

//share by me
//shared with me


module.exports = router;
