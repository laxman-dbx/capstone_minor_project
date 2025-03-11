const router = require("express").Router();
const authMiddleWare = require("../middlewares/authMiddleware");
const {sharedByMe} = require("../controllers/sharedByMe");

//share by me
//shared with me

router.get("/byMe", authMiddleWare, sharedByMe);

module.exports = router;