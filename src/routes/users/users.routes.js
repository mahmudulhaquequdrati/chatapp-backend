const express = require("express");
const checkLogin = require("../../middleware/checkLogin");

const router = express.Router();
const { registerUser, loginUser, checkUser } = require("./users.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/validation", checkLogin, checkUser);
module.exports = router;
