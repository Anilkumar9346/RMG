import { User } from "../../../models/userModel/models/model.js";

export const logoutUser = async (req, res) => {
  try {
    const id = req.user.userId;

    const logoutUser = await User.findByIdAndUpdate(
      id,
      {isActive:false}
    );
    
    if (!logoutUser) {
      return res.status(404).json({
        success: false,
        message: "Some Error Happen",
      });
    }

    res.status(200).json({
      success: true,
      message: "Logout Successfully"
    });

  } catch (error) {
    console.error("Some Error Happen:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
