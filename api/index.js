import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// mongoose.connect(`mongodb+srv://ermiyas:ermiyasp@mern.vmvag.mongodb.net/?retryWrites=true&w=majority&appName=mern`).then(()=>{
// console.log('connected to mongodb')})
 
mongoose.connect(process.env.MONG)
.then(()=>{
  console.log('connected to mongodb');

})
  .catch((err)=>{
    console.log(err)
  });

const app=express();
app.listen(3000,()=>{
  console.log ('server is  on port 3000 ');
});
