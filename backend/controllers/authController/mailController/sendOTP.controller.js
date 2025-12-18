import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const saltRounds = 10;
    const otpHash = await bcrypt.hash(otp, saltRounds);
    // if (!email) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Email and OTP are required"
    //   });
    // }

    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS
    //   }
    // });

    // const mailOptions = {
    //   from: `"Inspiron Labs" <${process.env.SMTP_USER}>`,
    //   to: email,
    //   subject: "Your OTP Code",
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //       <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">
    //         <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:30px 0;">
    //           <tr>
    //             <td align="center">
    //               <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        
    //                 <!-- Header -->
    //                 <tr>
    //                   <td style="background:#0a66c2; padding:20px; text-align:center;">
    //                     <h1 style="color:#ffffff; margin:0; font-size:22px;">
    //                       Inspiron Labs
    //                     </h1>
    //                   </td>
    //                 </tr>
        
    //                 <!-- Body -->
    //                 <tr>
    //                   <td style="padding:30px;">
    //                     <h2 style="color:#333333; margin-top:0;">
    //                       OTP Verification
    //                     </h2>
        
    //                     <p style="color:#555555; font-size:15px; line-height:1.6;">
    //                       Hello,
    //                     </p>
        
    //                     <p style="color:#555555; font-size:15px; line-height:1.6;">
    //                       Use the following One-Time Password (OTP) to complete your verification.
    //                     </p>
        
    //                     <!-- OTP Box -->
    //                     <div style="margin:30px 0; text-align:center;">
    //                       <span style="
    //                         display:inline-block;
    //                         padding:15px 30px;
    //                         font-size:28px;
    //                         letter-spacing:8px;
    //                         color:#0a66c2;
    //                         font-weight:bold;
    //                         border:2px dashed #0a66c2;
    //                         border-radius:6px;
    //                         background:#f0f7ff;
    //                       ">
    //                         ${otp}
    //                       </span>
    //                     </div>
        
    //                     <p style="color:#555555; font-size:14px;">
    //                       ⏳ This OTP is valid for <strong>10 minutes</strong>.
    //                     </p>
        
    //                     <p style="color:#999999; font-size:13px; line-height:1.5;">
    //                       If you did not request this code, please ignore this email or contact our support team.
    //                     </p>
        
    //                     <br/>
        
    //                     <p style="color:#555555; font-size:14px;">
    //                       Regards,<br/>
    //                       <strong>Inspiron Labs Team</strong>
    //                     </p>
    //                   </td>
    //                 </tr>
        
    //                 <!-- Footer -->
    //                 <tr>
    //                   <td style="background:#f4f6f8; padding:15px; text-align:center;">
    //                     <p style="margin:0; font-size:12px; color:#999999;">
    //                       © 2025 Inspiron Labs. All rights reserved.
    //                     </p>
    //                   </td>
    //                 </tr>
        
    //               </table>
    //             </td>
    //           </tr>
    //         </table>
    //       </body>
    //     </html>
        
    //   `
    // };

    // await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      hashOTP:otpHash,
      otp:otp
    });
  } catch (error) {
    console.error("Send OTP error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP"
    });
  }
};
