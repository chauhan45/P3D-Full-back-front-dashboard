const USER = require("../models/users.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");


router.post('/newpassword',(req,res)=>{
    const newPassword = req.body.password
    const email0 = req.body.email0;    
    USER.findOne({email:email0})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        
        bcrypt.hash(newPassword,12).then(hashedpassword=>{
           user.password = hashedpassword
        //    user.resetpassword = undefined
        //    user.expiretoken = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })
        
        })
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router;


