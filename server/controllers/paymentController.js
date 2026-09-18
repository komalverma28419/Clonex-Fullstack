const razorpay = require("../config/razorpay")
const crypto = require("crypto")
const Subscription = require("../models/Subscription")

const createOrder = async (req, res) => {
  try {
    const { amount, planId, billing } = req.body;

    if (!amount || !planId || !billing) {
      return res.status(400).json({
        success: false,
        message: "Amount, planId and billing are required",
      });
    }

    const options = {
      amount: Math.round(Number(amount) * 100),
      currency: "INR",
      receipt: `clonex_${Date.now()}`,
      notes: {
        planId: String(planId),
        billing,
        userId: String(req.user._id),
      },
    };

    const order = await razorpay.orders.create(options);

    return res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Razorpay order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create payment order",
    });
  }
}


const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
      planName,
      billing,
      amount,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    const today = new Date();

    const endDate = new Date(today);

    if (billing === "monthly") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    const subscription = await Subscription.create({
      user: req.user._id,

      planId,
      planName,

      billing,

      amount,

      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,

      status: "active",

      startDate: today,
      endDate,
    });

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully.",
      subscription,
    });
  } catch (error) {
    console.error("Verify payment error:", error);

    return res.status(500).json({
      success: false,
      message: "Payment verification failed.",
    });
  }
}

module.exports = { createOrder, verifyPayment }