const express = require("express")
const {signup, login, getProfile, updateProfile,verifyEmailOTP, resendOTP} = require("../controllers/authController")
const protect = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/signup", signup)
router.post("/verify-email", verifyEmailOTP)
router.post("/resend-otp", resendOTP)

router.post("/login", login)

router.get("/profile", protect, getProfile)
router.put("/profile", protect, updateProfile)


module.exports = router