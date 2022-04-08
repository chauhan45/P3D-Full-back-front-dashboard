const requestDemoModel = require("../models/requestDemoModel");
const router = require("express").Router();

router.post("/requestDemo",(req,res)=>{        
    const { firstName, lastName, email, mobileNumber, address, companyName, companyType, industryType } = req.body;
    let requestDemoObject = new requestDemoModel({
        firstName, lastName, email, mobileNumber, address, companyName, companyType, industryType 
    })
    requestDemoObject.save();    
})

module.exports = router;