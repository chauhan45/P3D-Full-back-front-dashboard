const userSchema = require("./../models/model0");
const mongoose = require("mongoose");
const modal0 = mongoose.model("modal2", userSchema, "users");
const express0 = require("express"); // Express
const router0 = express0.Router(); // Router
express0().use(express0.json()); // JSON Parser

function adminDeleteCustomer(){
    router0.post("/",(req,res)=>{        
        let id0 = req.body.id;            
        let id1 = mongoose.Types.ObjectId(id0);        
        modal0.findByIdAndUpdate(id1,{is_deleted:true},(err,res)=>console.log(res));
        res.end();
    })
}

adminDeleteCustomer();

module.exports = router0;