const userSchema = require("../models/model0");
const mongoose = require("mongoose");
const modal0 = mongoose.model("modal2", userSchema, "users");
const express0 = require("express"); // Express
const router0 = express0.Router(); // Router
express0().use(express0.json()); // JSON Parser
const bcrypt = require("bcrypt");

function adminEditCustomer(){
    router0.post("/",(req,res)=>{           
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            modal0.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.id),
            {
                user_type:req.body.user_type,
                firstName:req.body.first_name, 
                lastName:req.body.last_name, 
                mobileNumber:req.body.mobile_number,  
                email:req.body.email,
                address:req.body.address,
                companyName:req.body.company_name,
                companyType:req.body.company_type,
                industryType:req.body.industry_type,
                password:hash
                // companyName:req.body.company_name,
                // companyType:req.body.company_type,
                // industryType:req.body.industry_type
            },
            (e,r)=>console.log(r));        
            res.end();
        });
        
    })
}

adminEditCustomer();

module.exports = router0;