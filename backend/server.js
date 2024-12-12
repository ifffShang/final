import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import passport from './config/passport.js';
import multer from 'multer';
import path from 'path';

const app = express();

// cors
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4000'
}));

app.options('*', cors());

// database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database not connected", err);
  });

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.urlencoded({extended: false}));



app.use("/", authRoutes)

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Store uploaded files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file with a timestamp
  },
});

const upload = multer({ storage });

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

