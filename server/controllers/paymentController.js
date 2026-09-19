const razorpay = require("../config/razorpay")
const crypto = require("crypto")
const Subscription = require("../models/Subscription")

const createOrder = async (req, res) => {
  console.log("CREATE ORDER ROUTE HIT");
  try {
    const { amount, planId, billing } = req.body
    console.log("Payment request:", {
      amount,
      planId,
      billing,
      userId: req.user?.userId,
    });

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
        userId: String(req.user.userId),
      },
    };

    const order = await razorpay.orders.create(options);

    await Subscription.create({
      user: req.user.userId,

      planId,

      planName:
      Number(planId) === 1
        ? "Standard"
        : Number(planId) === 2
        ? "Extended"
        : Number(planId) === 3
        ? "Premium+"
        : "Unknown Plan",

      billing,

      amount: Number(amount),

      razorpayOrderId: order.id,

      status: "created",
    });

    return res.status(201).json({
      success: true,
      message: "Payment order created successfully",
      order,
    });

  } catch (error) {
    console.error("Razorpay order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create payment order",
    });
  }
};


const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment details are required",
      });
    }

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    const subscription = await Subscription.findOne({
      razorpayOrderId: razorpay_order_id,
      user: req.user.userId,
    });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription record not found.",
      });
    }

    const today = new Date();

    const endDate = new Date(today);

    if (subscription.billing === "monthly") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    subscription.razorpayPaymentId = razorpay_payment_id;
    subscription.status = "active";
    subscription.startDate = today;
    subscription.endDate = endDate;

    await subscription.save();

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
};


module.exports = { createOrder, verifyPayment }