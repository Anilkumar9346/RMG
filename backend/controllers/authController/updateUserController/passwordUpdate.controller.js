import bcrypt from "bcrypt";
import { User } from "../../../models/userModel/models/model.js";

export const passwordUpdate = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    console.error("Password Update Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
