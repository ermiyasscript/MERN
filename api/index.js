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

// app.get('/test', (req,res)=>{res.send('hi man')})
 app.use('/api/user' ,userRouter);
 app.use('/api/auth' ,authRouter);