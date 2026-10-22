const User = require("../models/User")
const cloudinary = require("../config/cloudinary")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const signup = async (req, res) => {
    try {
        const { companyName, Username, email, phone, password, terms } = req.body;

        if (!companyName || !Username || !email || !phone || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (!terms) {
            return res.status(400).json({
                message: "You must accept terms & Conditions and Privacy Policy"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists. Please login."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            companyName,
            Username,
            email,
            phone,
            password: hashedPassword,
            termsAccepted: true,
            termsAcceptedAt: new Date(),
        });

        await user.save();

        return res.status(201).json({
            message: "Account created successfully. Please login.",
            user: {
                id: user._id,
                companyName: user.companyName,
                Username: user.Username,
                email: user.email,
                phone: user.phone
            }
        });

    } catch (error) {
        console.error("Signup error:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                message: "Email already registered. Please login."
            });
        }

        return res.status(500).json({
            message: error.message || "Server error"
        });
    }
};




const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                companyName: user.companyName,
                Username: user.Username,
                email: user.email,
                phone: user.phone
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};



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

module.exports = {signup, login, getProfile, updateProfile,  uploadProfilePhoto, deleteProfilePhoto}