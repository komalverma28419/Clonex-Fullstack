const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOTPEmail = async (email, otp) => {
    const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "CloneX Email Verification OTP",
        text: `Your CloneX verification OTP is ${otp}. It is valid for 10 minutes.`,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

module.exports = {
    sendOTPEmail,
};