import bcrypt from "bcrypt";
import { User } from "../../../models/userModel/models/model.js";

export const addUser = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    if (!username || !fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (!email.endsWith("@inspironlabs.com")) {
      return res.status(400).json({
        success: false,
        message: "Only inspironlabs.com email addresses are allowed"
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username or email already exists"
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username,
      fullname,
      email,
      password: hashedPassword
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user._id,
        username: user.username,
        fullname: user.fullname,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Add user error:", error);

    // 🔹 Duplicate key fallback
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Username or email already exists"
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to create user"
    });
  }
};
