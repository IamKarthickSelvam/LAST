const express = require("express");
const { registerUser, loginUser, view } = require("../Controllers/userController");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/view", view);

module.exports = router;