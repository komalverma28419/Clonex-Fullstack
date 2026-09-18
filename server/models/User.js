const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
            trim: true,
        },
        Username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        profilePhoto: {
            type: String,
            default: "",
        },
        profilePhotoPublicId: {
            type: String,
            default: "",
        },
        termsAccepted: {
            type: Boolean,
            required: true,
            default: false
        },
        termsAcceptedAt: {
            type: Date
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        emailVerificationOTP: {
            type: String
        },
        emailVerificationOTPExpires: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)

// const User = mongoose.model("User", userSchema)
// module.exports = User