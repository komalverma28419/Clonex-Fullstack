const Subscription = require("../models/Subscription");

const getCurrentSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({
      user: req.user.userId,
    }).sort({ createdAt: -1 });

    if (!subscription) {
      return res.status(200).json({
        success: true,
        subscription: null,
      });
    }

    const today = new Date();

    if (
      subscription.status === "active" &&
      subscription.endDate &&
      subscription.endDate <= today
    ) {
      subscription.status = "expired";
      await subscription.save();
    }

    return res.status(200).json({
      success: true,
      subscription,
    });
  } catch (error) {
    console.error("Get current subscription error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch subscription",
    });
  }
}


const startFreeTrial = async (req, res) => {
  try {
    const userId = req.user.userId;

    // 1. Active paid subscription check
    const activeSubscription = await Subscription.findOne({
      user: userId,
      status: "active",
      isTrial: false,
    });

    if (activeSubscription) {
      return res.status(400).json({
        success: false,
        message: "You already have an active subscription",
      });
    }

    // 2. Trial already used?
    const usedTrial = await Subscription.findOne({
      user: userId,
      isTrial: true,
    });

    if (usedTrial) {
      return res.status(400).json({
        success: false,
        message: "Free trial already used",
      });
    }

    // 3. Create new free trial
    const startDate = new Date();

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const subscription = await Subscription.create({
      user: userId,
      planId: "free-trial",
      planName: "Free Trial",
      billing: "trial",
      amount: 0,
      currency: "INR",

      razorpayOrderId: "",
      razorpayPaymentId: "",

      isTrial: true,
      status: "active",

      startDate,
      endDate,
    });

    return res.status(201).json({
      success: true,
      message: "Free Trial activated successfully",
      subscription,
    });
  } catch (error) {
    console.error("Start Free Trial Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to start free trial",
    });
  }
};

module.exports = { getCurrentSubscription, startFreeTrial}