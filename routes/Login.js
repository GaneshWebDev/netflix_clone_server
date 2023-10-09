const express=require('express');
const userModel=require('../models/user');
const bcrypt=require('bcrypt');
const router=express.Router();
router.post('/login',async(req,res)=>{
      const user= await userModel.findOne({email:req.body.email});
      if(user){
            bcrypt.compare(req.body.password,user.password,function(err,result){
                if(err){
                    throw err;
                }
                if(!result){
                    res.send("incorrect user password");
                }else{
                    userDetails={
                        name:user.name,
                        email:user.email,
                        auth:true,
                    }
                    res.send(userDetails);
                }
            })
      }else{
        res.send('user not found')
      }
});
module.exports=router;
