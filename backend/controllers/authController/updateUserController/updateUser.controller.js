import { User } from "../../../models/userModel/models/model.js";

export const updateUser = async (req, res) => {
  try {
    const id = req.user.userId;

    const allowedUpdates = [
      "username",
      "fullname",
      "email"
    ];

    const updates = {};

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided to update",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updates,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    console.error("Update User Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
