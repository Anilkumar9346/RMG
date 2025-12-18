import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { resourceRouter } from "./routers/resourceRouter.js";
import { notFound } from "./controllers/errorController/notFound.js";
import { errorHandler } from "./controllers/errorController/errorHandler.js";
import { commentRouter } from "./routers/commentRouter.js";
import { authRouter } from "./routers/authRouter.js";
import { authenticate } from "./controllers/authController/authUserController.js/authorization.controller.js";
import { authorizeRoles } from "./controllers/authController/authUserController.js/authorizeRole.middleware.js";
dotenv.config();

const app = express();

connectDB();
app.use(cors())

// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
// }));

app.use(express.json());

//AuthRouter
app.use("/api/authUser",authRouter)

// resourceRouter
// app.use("/api/resource",resourceRouter);
app.use("/api/resource",authenticate,authorizeRoles("ADMIN", "SALES_MANAGER","HR"), resourceRouter);

//commentRouter
app.use("/api/comment",authenticate, commentRouter);


//errorRouter
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
