const express =require('express');
const signUpRoute=require('./routes/SignUp');
const loginRoute=require('./routes/Login');
const cors= require('cors');
const connectDB=require('./db')
const app=express();
app.use(cors());
app.use(express.json());
app.use(signUpRoute);
app.use(loginRoute);
app.listen(5000,()=>{
    console.log('server listening to port 5000');
});
connectDB();
