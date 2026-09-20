const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 587,
    secure: false,

    auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
    },
});

const sendOTPEmail = async (email, otp) => {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "CloneX Email Verification OTP",
        text: `Your CloneX verification OTP is ${otp}. It is valid for 10 minutes.`,
    });

    return info;
};

module.exports = {
    sendOTPEmail,
};