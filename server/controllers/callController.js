const Call = require("../models/Call");

const createCall = async (req, res) => {
  try {
    const { callerName, phoneNumber, status, duration } = req.body;

    if (!callerName || !phoneNumber || !status) {
      return res.status(400).json({
        success: false,
        message: "Caller name, phone number and status are required",
      });
    }

    const call = await Call.create({
      user: req.user.userId,
      callerName,
      phoneNumber,
      status,
      duration: duration || 0,
    });

    return res.status(201).json({
      success: true,
      message: "Call created successfully",
      call,
    });
  } catch (error) {
    console.error("Create call error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create call",
    });
  }
}


const getCalls = async (req, res) => {
  try {
    const calls = await Call.find({
      user: req.user.userId,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      calls,
    });
  } catch (error) {
    console.error("Get calls error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch calls",
    });
  }
}
module.exports = { createCall, getCalls }