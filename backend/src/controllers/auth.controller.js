import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "../emails/emailHandler.js";
import { ENV } from "../lib/env.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(409).json({ message: "Email already in use." });

    const newUser = new User({ fullName, email, password });

    if (newUser) {
      const savedUser = await newUser.save();
      generateToken(savedUser._id, res);
      res.status(201).json({
        message: "User registered successfully.",
        data: {
          fullName: savedUser.fullName,
          email: savedUser.email,
          profilePic: savedUser.profilePic,
        },
      });

      try {
        await sendWelcomeEmail(
          savedUser.email,
          savedUser.fullName,
          ENV.CLIENT_URL
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      return res.status(500).json({ message: "Failed to register user." });
    }
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error during signup." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    generateToken(user._id, res);
    res.status(200).json({
      message: "Login successful",
      data: {
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login." });
  }
};

export const logout = (_, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logout successful" });
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    if (!profilePic)
      return res.status(400).json({ message: "Profile picture is required." });

    const userId = req.user._id;

    const uploadResult = await cloudinary.uploader.upload(profilePic);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResult.secure_url },
      { new: true }
    );

    res.status(200).json({
      message: "Profile picture updated successfully.",
      data: {
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        profilePic: updatedUser.profilePic,
      },
    });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Server error during update profile." });
  }
};
