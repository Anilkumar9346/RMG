import express from "express"
import { addUser } from "../controllers/authController/addUserController/addUser.controller.js";
import { deleteUser } from "../controllers/authController/deleteUserController/deleteUser.controller.js";
import { getAllUser, getUser } from "../controllers/authController/getUserController/getUser.controller.js";
import { loginUser } from "../controllers/authController/authUserController.js/authUser.controller.js";
import { authenticate } from "../controllers/authController/authUserController.js/authorization.controller.js";

const router = express.Router();

router.post('/addUser',addUser)

router.get('/getUser',loginUser)

router.get('/authUserdata',authenticate)

router.get('/get-all-User',getAllUser)
router.delete('/delete-User/:id',deleteUser)

export const authRouter = router;