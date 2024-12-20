import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './route/user.rout.js'
dotenv.config();
mongoose.connect(process.env.MONG)
.then(()=>{
  console.log('connected to mongodb');

})
  .catch((err)=>{
    console.log(err)
  });

const app=express();
app.listen(3000,()=>{
  console.log ('server is  on port 3000 ')
});
 app.use('/api/user' ,userRouter);