const mongoose = require("mongoose")


const subscriptionSchema = new mongoose.Schema(
    {
        user: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User",
           required: true 
        },
        planId: {
            type: String,
            required: true
        },
        planName: {
            type: String,
            required: true
        },
        billing: {
            type: String,
            enum: ["trial","monthly", "annually"],
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            default: "INR"
        },
        razorpayOrderId: {
            type: String,
            default: "" 
        },
        razorpayPaymentId: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            enum: ["created", "active", "failed", "cancelled", "expired"],
            default: "created",
        },
        isTrial: {
            type: Boolean,
            default: false,
        },
        startDate: {
            type: Date,
            default: null,
        },
         endDate: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Subscription", subscriptionSchema)