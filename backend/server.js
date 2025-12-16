
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { resourceRouter } from "./routers/resourceRouter.js";
import { userRouter } from "./models/userModel/userRoutes.js";
import { notFound } from "./controllers/errorController/notFound.js";
import { errorHandler } from "./controllers/errorController/errorHandler.js";
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());


// resourceRouter
app.use("/api/resource", resourceRouter);
app.use("/api/user", userRouter);


//errorRouter
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
