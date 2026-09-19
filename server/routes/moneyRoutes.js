const express = require("express")
const router = express.Router()
const {getWallet, createWalletOrder, verifyWalletPayment, getTransactions} =  require("../controllers/walletController")
const protect = require("../middleware/authMiddleware")




router.get("/", protect, getWallet)
router.get("/transactions", protect, getTransactions);
router.post("/create-order", protect, createWalletOrder)
router.post("/verify-payment", protect, verifyWalletPayment)


module.exports = router