import express from "express";
import User from "../models/User.js"
import bcrypt from "bcrypt";

const router=express.Router();


router.post("/register",async(req,res)=>{
  try{
    
    const hashpassword=await bcrypt.hash(req.body.password,10);
    const user=new User({...req.body,password:hashpassword,});
    await user.save();
    res.status(201).json({
        success:true,
        message:"Registerd Successfully"
    })
  }catch(error){
    res.status(500).json({
        success:false,
        message:error.message
  })
  }
})


router.post("/login",async(req,res)=>{
  const {username,password} = req.body;
  const user=await User.findOne({username});

  if(!user){
    return res.status(404).json({
      success:false,
      message:"user not found"
    })
  }

  const ismatch=await bcrypt.compare(password,user.password);

  if(!ismatch){
    return res.status(404).json({
      success:false,
      message:"Invalid password"
    });
  }

  return res.status(201)
.json({
  success:true,
  message:"Login success",
  user:{
    fullname:user.fullname,
    username:user.username,
    email:user.email
  }
});
});
export default router;