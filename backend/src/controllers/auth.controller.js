import { sendWelcomeEmail } from "../emails/emailHandler.js";
import { ENV } from "../lib/env.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";

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
      res.status(201).json({ message: "User registered successfully." });

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
