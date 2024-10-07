const express = require("express");
const authController = require("../Controllers/authController");

const router = express.Router();

router.get("/alltoken", authController.allToken);
router.post("/createatoken", authController.addToken);

module.exports = router;