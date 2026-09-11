const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})
const signup = async (req, res) =>{
    try{
        const{companyName, Username, email, phone, password, terms} = req.body
        // ----------------------------------Check required fields------------------------------------
        if(!companyName || !Username || !email || !phone || !password){
            return res.status(400).json({
                message : "All fields are required"
            })
            
        }
        // --------------------------------------Check Terms & Conditions--------------------------
        if(!terms){
            return res.status(400).json({
                message: "You must accept terms & Conditions and Privacy Policy"
            })
        }
        //----------------------------------- Check existing user-------------------------------

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message: "User already exist"
            })
        }
        //--------------------------------------------- Hash password------------------------------
        const hashedPassword = await bcrypt.hash(password, 10)
        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        // -----------------------------------Create user-----------------------------------
        const user = await User.create({
            companyName,
            Username,
            email,
            phone,
            password: hashedPassword,
            termsAccepted: true,
            termsAcceptedAt: new Date(),
            isEmailVerified: false,
            emailVerificationOTP: otp,
            emailVerificationOTPExpires: new Date(Date.now() + 10 * 60 * 1000 )
        })
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "CloneX Email Verification OTP",
            text: `Your CloneX verification OTP is ${otp}. It is valid for 10 minutes.`
        })
        res.status(201).json({
            message: "Account created successfully. OTP sent to your email",
            user:{
                id: user._id,
                companyName: user.companyName,
                Username: user.Username,
                email: user.email,
                phone: user.phone
            }
        })

    }catch(error){
        console.error("Signup error", error)
        res.status(500).json({
            message: "Server error"
        })
    }
}


const verifyEmailOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                message: "Email and OTP are required"
            });
        }

        const user = await User.findOne({ email });
 

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.isEmailVerified) {
            return res.status(400).json({
                message: "Email is already verified"
            });
        }

        if (
            user.emailVerificationOTP !== otp ||
            !user.emailVerificationOTPExpires ||
            user.emailVerificationOTPExpires < new Date()
        ) {
            return res.status(400).json({
                message: "Invalid or expired OTP"
            });
        }

        user.isEmailVerified = true;
        user.emailVerificationOTP = undefined;
        user.emailVerificationOTPExpires = undefined;

        await user.save();

        res.status(200).json({
            message: "Email verified successfully"
        });

    } catch (error) {
        console.error("Email verification error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


const resendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.isEmailVerified) {
            return res.status(400).json({
                message: "Email is already verified"
            });
        }

        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        user.emailVerificationOTP = otp;

        user.emailVerificationOTPExpires = new Date(
            Date.now() + 10 * 60 * 1000
        );

        await user.save();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "CloneX New Verification OTP",
            text: `Your new CloneX verification OTP is ${otp}. It is valid for 10 minutes.`
        });

        res.status(200).json({
            message: "A new OTP has been sent to your email"
        });

    } catch (error) {
        console.error("Resend OTP error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

const login = async (req, res) =>{
    try{
        const { email, password } = req.body
        //----------------------------------- Check required fields---------------------------------
        if(!email || !password){
            return res.status(400).json({
                message: "Email ans Password are required"
            })
        }
        //-------------------------------find User----------------------------------------------
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        if (!user.isEmailVerified) {
            return res.status(403).json({
                message: "Please verify your email before logging in"
            })
        }
        //-----------------------------compare password-------------------------------------------
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )
        if(!isPasswordCorrect){
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        //---------------------------------generate JWT--------------------------------------------
        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES}
        )
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                companyName: user.companyName,
                Username: user.Username,
                email: user.email,
                phone: user.phone
            }
        })
    }catch(error){
        console.error("Login error", error)
        res.status(500).json({
            message: "server error"
        })
    }
}


const getProfile = async(req,res) =>{
    try{
        const user = await User.findById(req.user.userId).select("-password")
        if(!user){
            return res.status(404).json({
                message: "user not found"
            })
        }
        res.status(200).json({
            message: "Profile fetched successfully",
            user
        })
    }catch(error){
        console.error("Profile error:", error)
        res.status(500).json({
            message: "server error"
        })
    }
}

const updateProfile = async (req, res) => {
  try {
    const { Username, email, phone } = req.body;

    if (!Username || !email || !phone) {
      return res.status(400).json({
        message: "Username, email and phone are required",
      })
    }

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.Username = Username
    user.email = email
    user.phone = phone
    await user.save()

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        companyName: user.companyName,
        Username: user.Username,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Update profile error:", error);

    res.status(500).json({
      message: "Server error",
    })
  }
}
module.exports = {signup, login, getProfile, updateProfile, verifyEmailOTP, resendOTP}