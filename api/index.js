import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './route/user.rout.js'
import authRouter from './route/auth.route.js'
dotenv.config();
mongoose.connect(process.env.MONG)
.then(()=>{
  console.log('connected to mongodb');

})
  .catch((err)=>{
    console.log(err)
  });

const app = express();
app.use(express.json());
app.listen(3000,()=>{
  console.log ('server is  on port 3000 ')
});


 app.use('/api/user' ,userRouter);
 app.use('/api/auth' ,authRouter);
 app.use ((err, req, res, next)=>{
  const statuscode = err.statuscode || 500;
  const message =err.message ||'Internal server error';
  return res.status(statuscode).json({
    success:false,
    statuscode,
    message ,
  })
 })
