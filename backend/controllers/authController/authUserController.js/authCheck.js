import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  try {
    const {authorization} = req.body;
    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "Access token missing"
      });
    }

    const token = authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({
        success: true,
        data:decoded
      });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};
