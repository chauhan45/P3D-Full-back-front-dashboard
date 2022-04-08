const USERS = require("../models/users.model");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/admin/unarchive",(req,res)=>{    
    USERS.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.id),{$set:{is_deleted:false}},(err,res)=>{console.log(res)});
    res.end();
})

router.post("/partner/unarchive",(req,res)=>{    
    USERS.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.id),{$set:{is_deleted:false}},(err,res)=>{console.log(res)});
    res.end();
})

router.post("/customer/unarchive",(req,res)=>{    
    USERS.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.id),{$set:{is_deleted:false}},(err,res)=>{console.log(res)});
    res.end();
})

router.post("/approve/partner",(req,res)=>{    
    USERS.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.id),{$set:{admin_approved:true}},(err,res)=>{console.log(res)});
    res.end();
})

router.post("/approve/customer",(req,res)=>{    
    USERS.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.id),{$set:{admin_approved:true}},(err,res)=>{console.log(res)});
    res.end();
})

module.exports = router;
