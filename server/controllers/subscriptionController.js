const Subscription = require("../models/Subscription");

const getCurrentSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({
      user: req.user.userId,
      status: "active",
    }).sort({ createdAt: -1 });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "No active subscription found",
      });
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
};

module.exports = {
  getCurrentSubscription,
};