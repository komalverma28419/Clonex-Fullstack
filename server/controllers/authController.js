const User = require("../models/User")
const cloudinary = require("../config/cloudinary")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4,
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});


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
        const user = new User({
        companyName,
        Username,
        email,
        phone,
        password: hashedPassword,
        termsAccepted: true,
        termsAcceptedAt: new Date(),
        isEmailVerified: false,
        emailVerificationOTP: otp,
        emailVerificationOTPExpires: new Date(Date.now() + 10 * 60 * 1000),
        });

        // Email bhejo pehle
        await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "CloneX Email Verification OTP",
        text: `Your CloneX verification OTP is ${otp}. It is valid for 10 minutes.`,
        });

        // Email successful → user save
        await user.save();

        return res.status(201).json({
        message: "Account created successfully. OTP sent to your email",
        user: {
            id: user._id,
            companyName: user.companyName,
            Username: user.Username,
            email: user.email,
            phone: user.phone,
        },
        });

    }catch (error) {
        console.error("Signup error:", error);

        if (error.code === 11000) {
            return res.status(400).json({
            message: "Email already registered. Please login.",
            });
        }

        return res.status(500).json({
            message: error.message || "Server error",
        });
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
    const { Username, email, phone, profilePhoto } = req.body;

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
    if (profilePhoto !== undefined) {
        user.profilePhoto = profilePhoto;
    }
    await user.save()

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        companyName: user.companyName,
        Username: user.Username,
        email: user.email,
        phone: user.phone,
        profilePhoto: user.profilePhoto,
      },
    });
  } catch (error) {
    console.error("Update profile error:", error);

    res.status(500).json({
      message: "Server error",
    })
  }
}
const uploadProfilePhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please select an image",
      });
    }

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const oldProfilePhotoPublicId = user.profilePhotoPublicId;
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "clonex/profile-photos",
        resource_type: "image",
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);

          return res.status(500).json({
            message: "Failed to upload image",
          });
        }

        user.profilePhoto = result.secure_url;
        user.profilePhotoPublicId = result.public_id;

        await user.save();

        // Delete old photo from Cloudinary
        if (oldProfilePhotoPublicId) {
        try {
            await cloudinary.uploader.destroy(oldProfilePhotoPublicId);
        } catch (deleteError) {
            console.error("Old profile photo delete error:", deleteError);
        }
        }

        res.status(200).json({
          message: "Profile photo uploaded successfully",
          user: {
            id: user._id,
            companyName: user.companyName,
            Username: user.Username,
            email: user.email,
            phone: user.phone,
            profilePhoto: user.profilePhoto,
          },
        });
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error("Profile photo upload error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

const deleteProfilePhoto = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Delete image from Cloudinary
    if (user.profilePhotoPublicId) {
      await cloudinary.uploader.destroy(user.profilePhotoPublicId);
    }

    // Remove photo data from MongoDB
    user.profilePhoto = "";
    user.profilePhotoPublicId = "";

    await user.save();

    res.status(200).json({
      message: "Profile photo deleted successfully",
      user: {
        id: user._id,
        companyName: user.companyName,
        Username: user.Username,
        email: user.email,
        phone: user.phone,
        profilePhoto: user.profilePhoto,
        profilePhotoPublicId: user.profilePhotoPublicId,
      },
    });
  } catch (error) {
    console.error("Delete profile photo error:", error);

    res.status(500).json({
      message: "Failed to delete profile photo",
    });
  }
}

module.exports = {signup, login, getProfile, updateProfile, verifyEmailOTP, resendOTP, uploadProfilePhoto, deleteProfilePhoto}