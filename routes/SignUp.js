const express =require('express');
const bcrypt=require('bcrypt');
const userModel=require('../models/user')
const salt=10;
router=express.Router();
router.post('/signUp',(req,res)=>{
          let passwordHash=req.body.password
          console.log('reg');
          bcrypt.hash(passwordHash,salt,async function(err,hash){
            if(err){
              throw err;
            }
            const user=new userModel({
              name:req.body.name,
              email:req.body.email,
              password:hash
            });
            try {
              await user.save();
              res.status(200).send('data stored');
            } catch (error) {
              res.send(error);
            }
          })
          
         
});
module.exports=router;
