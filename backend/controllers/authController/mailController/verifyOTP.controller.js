import bcrypt from "bcrypt";

export const verifyOTP = async (req, res) => {
  try {
    const { otp,hashOTP } = req.body;

    const isVerify = await bcrypt.compare(otp, hashOTP);
    if (!isVerify) {
        return res.status(401).json({
          success: true,
          message: "invalid OTP",
          otp:otpHash
        });
    }
    return res.status(200).json({
      success: true,
      message: "User Verify successfully"
    });
  } catch (error) {
    console.error("OTP verify error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to verify OTP"
    });
  }
};
