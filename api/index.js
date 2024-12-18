import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose
.connect(process.env.MONG)
.then(()=>{
  console.log('conected to mongodb')
})
  .catch((err)=>{
    console.log(err)
  });

const app=express();
app.listen(3000,()=>{
  console.log ('server is  runing on port 3000 ');
});
