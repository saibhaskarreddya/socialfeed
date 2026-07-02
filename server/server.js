import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from 'dotenv';
import router from './routes/auth.js';

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",router);

mongoose
  .connect(process.env.mongo_url)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:", err.message);
  });
app.get("/",(req,res)=>{
    res.send("Server running");
})

app.listen(process.env.port,()=>{
    console.log("server running on port 5000");
})