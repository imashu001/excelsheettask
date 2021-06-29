const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");

router.post("/post", userController.postRows);
// router.post("/login", userController.logintoSystem);
router.get("/getPosts", userController.getRows);
router.delete("/destroy/:rowId", userController.deleteRows);

module.exports = router;
