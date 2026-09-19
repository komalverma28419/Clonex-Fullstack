const express = require("express");
const router = express.Router();
const { createCall, getCalls } = require("../controllers/callController");
const protect = require("../middleware/authMiddleware");



router.post("/", protect, createCall)
router.get("/", protect, getCalls)

module.exports = router;