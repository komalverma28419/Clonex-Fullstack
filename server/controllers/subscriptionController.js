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
};

module.exports = {
  getCurrentSubscription,
};