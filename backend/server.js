import dotenv from 'dotenv';
// config
dotenv.config();
import express from "express";
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";

const app = express();

// database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database not connected", err);
  });

// middleware
app.use(express.json())

// cors
app.use(cors());

app.use("/", authRoutes)

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

