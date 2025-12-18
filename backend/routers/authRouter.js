import express from "express"
import { addUser } from "../controllers/authController/addUserController/addUser.controller.js";
import { deleteUser } from "../controllers/authController/deleteUserController/deleteUser.controller.js";
import { getAllUser } from "../controllers/authController/getUserController/getUser.controller.js";
import { loginUser } from "../controllers/authController/authUserController.js/authUser.controller.js";
import { authenticate } from "../controllers/authController/authUserController.js/authorization.controller.js";
import { sendOTP } from "../controllers/authController/mailController/sendOTP.controller.js";
import { updateUser } from "../controllers/authController/updateUserController/updateUser.controller.js";
import { passwordUpdate } from "../controllers/authController/updateUserController/passwordUpdate.controller.js";
import { logoutUser } from "../controllers/authController/updateUserController/inActiveUser.controller.js";
import { verifyOTP } from "../controllers/authController/mailController/verifyOTP.controller.js";

const router = express.Router();

router.post('/addUser',addUser)

router.get('/getUser',loginUser)

// router.post('/authozied_user',authenticate)

router.get('/get-all-User',getAllUser)
router.delete('/delete-User/:id',deleteUser)


router.post("/logoutUser",authenticate,logoutUser)
router.put("/updateUser",authenticate,updateUser)
router.put("/updatePassword",passwordUpdate)

//otp sender

router.post('/get-OTP',sendOTP)
router.post('/verify-OTP',verifyOTP)

export const authRouter = router;