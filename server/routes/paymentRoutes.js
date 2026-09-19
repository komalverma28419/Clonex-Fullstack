const express = require("express")
const router = express.Router()
const { createOrder, verifyPayment, failPayment, cancelPayment} = require("../controllers/paymentController")
const protect = require("../middleware/authMiddleware")



router.post("/create-order", protect, createOrder)
router.post("/verify-payment", protect, verifyPayment)
router.post("/cancel", protect, cancelPayment)
router.post("/failed", protect, failPayment)


module.exports = router