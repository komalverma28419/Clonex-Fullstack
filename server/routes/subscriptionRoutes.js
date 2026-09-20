const express = require("express")
const router = express.Router();
const {getCurrentSubscription, startFreeTrial} = require("../controllers/subscriptionController")
const protect = require("../middleware/authMiddleware")



router.get("/current", protect, getCurrentSubscription)
router.post("/free-trial", protect, startFreeTrial)

module.exports = router