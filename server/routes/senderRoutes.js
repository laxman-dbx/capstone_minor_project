const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {senderDeletion} = require("../controllers/senderDeletion");

router.post("/deleteEntry", authMiddleware, senderDeletion);
module.exports = router;