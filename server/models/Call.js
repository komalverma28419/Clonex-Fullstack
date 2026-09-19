const mongoose = require("mongoose");

const callSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    callerName: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["connected", "missed", "failed"],
      required: true,
    },

    duration: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Call", callSchema);