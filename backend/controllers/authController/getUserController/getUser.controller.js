import mongoose from "mongoose";
import { User } from "../../../models/userModel/models/model.js";

// export const getUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid user ID"
//       });
//     }

//     const getUser = await User.findById(id);

//     if (!getUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found"
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data:getUser
//     });
//   } catch (error) {
//     console.error("Get user error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to get user"
//     });
//   }
// };


export const getAllUser = async (req, res) => {
  try {
    const getUser = await User.find();

    if (!getUser || getUser.length==0) {
      return res.status(404).json({
        success: false,
        message: "no user"
      });
    }

    return res.status(200).json({
      success: true,
      data:getUser
    });
  } catch (error) {
    console.error("Get user error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get user"
    });
  }
};

