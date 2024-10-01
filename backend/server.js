import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse form data into JSON

app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectMongoDB();
});
