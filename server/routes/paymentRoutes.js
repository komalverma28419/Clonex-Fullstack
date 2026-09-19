const express = require("express")

const router = express.Router()

const {
    createOrder,
    verifyPayment
} = require("../controllers/paymentController")

const protect = require("../middleware/authMiddleware")


router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Payment router is working"
    })
})

router.post("/create-order", protect, createOrder)

router.post("/verify-payment", protect, verifyPayment)

module.exports = router