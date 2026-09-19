const User = require("../models/User")
const razorpay = require("../config/razorpay")
const crypto = require("crypto")
const Transaction = require("../models/Transaction");


const getWallet = async(req, res) =>{
    try{
        const user = await User.findById(req.user.userId).select("wallet")
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            wallet: user.wallet
        })
    }catch(error){
        console.error("Get wallet error", error)
        return res.status(500).json({
            success: false,
            message: "Failed to fetch wallet"
        })
    }
}


const createWalletOrder = async(req, res) =>{
    try{
        const{amount} = req.body
        if(!amount || Number(amount) <= 0){
            return res.status(400).json({
                success: false,
                message: "valid amount is required"
            })
        }
        const options = {
            amount: Math.round(Number(amount) * 100),
            currency: "INR",
            receipt: `wallet_${Date.now()}`,
            notes: {
                userId: String(req.user.userId),
                type: "wallet_recharge"
            }
        }
        const order = await razorpay.orders.create(options)
        return res.status(201).json({
            success: true,
            message: "Wallet order created successfully",
            order
        })
    }catch(error){
        return res.status(500),json({
            success: false,
            message: "Failed to create wallet order"
        })
    }
}

const verifyWalletPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !amount
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment details are required",
      });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const rechargeAmount = Number(amount);

    user.wallet.totalAmount += rechargeAmount;
    user.wallet.availableAmount += rechargeAmount

    await Transaction.create({
        user: req.user.userId,
        type: "credit",
        amount: rechargeAmount,
        status: "success",
        description: "Wallet Recharge",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
    })

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Wallet recharged successfully",
      wallet: user.wallet,
    });
  } catch (error) {
    console.error("Verify wallet payment error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to verify wallet payment",
    });
  }
}


const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user.userId,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      transactions,
    });
  } catch (error) {
    console.error("Get transactions error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch transactions",
    });
  }
};


module.exports = {getWallet, createWalletOrder, verifyWalletPayment, getTransactions}