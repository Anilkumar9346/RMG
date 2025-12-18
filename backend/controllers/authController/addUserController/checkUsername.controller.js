import { User } from "../../../models/userModel/models/model.js";

export const checkUsername = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required"
      });
    }

    const existingUser = await User.findOne({username});

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username already exists"
      });
    }

    return res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error("Add user error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Username already exists"
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to check user"
    });
  }
};
