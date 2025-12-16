import mongoose from "mongoose";
import { Comment } from "../../../models/commentModel/models/models.js";

export const getAllComment = async (req, res) => {
  try {
    const { resourceId } = req.params;

    const filter = {};

    if (resourceId) {
      if (!mongoose.Types.ObjectId.isValid(resourceId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid resource ID",
        });
      }
      filter.resourceModelId = resourceId;
    }

    const comments = await Comment.find(filter)

    if (comments.length === 0) {
      return res.status(200).json({
        success: true,
        count: 0,
        data: [],
        message: "No comments found",
      });
    }

    return res.status(200).json({
      success: true,
      count: comments.length,
      data: comments,
    });
  } catch (error) {
    console.error("Get all comments error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch comments",
    });
  }
};
