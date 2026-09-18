const express = require("express")
const router = express.Router();
const {getCurrentSubscription} = require("../controllers/subscriptionController")
const protect = require("../middleware/authMiddleware")



router.get("/current", protect, getCurrentSubscription);

module.exports = router