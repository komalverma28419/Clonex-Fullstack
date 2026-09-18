const express = require("express")
const {signup, login, getProfile, updateProfile,verifyEmailOTP, resendOTP, uploadProfilePhoto, deleteProfilePhoto} = require("../controllers/authController")
const protect = require("../middleware/authMiddleware")
const upload = require("../middleware/upload")

const router = express.Router()

router.post("/signup", signup)
router.post("/verify-email", verifyEmailOTP)
router.post("/resend-otp", resendOTP)
router.post("/profile-photo",protect,upload.single("profilePhoto"),uploadProfilePhoto)
router.delete("/profile-photo", protect, deleteProfilePhoto)

router.post("/login", login)

router.get("/profile", protect, getProfile)
router.put("/profile", protect, updateProfile)



module.exports = router