const express = require("express");
const userRouter = express.Router();

userRouter.post("/api/signup", (req,res)=>{
  res.send("Signup");
userRouter.post("/api/login", (req,res)=>{
  res.send("Login");
});

})

module.exports = userRouter;