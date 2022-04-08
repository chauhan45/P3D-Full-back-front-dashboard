const mongoose0 = require("mongoose"); // Mongo
const schema1 = mongoose0.Schema;
mongoose0.connect("mongodb+srv://amit:12345@cluster0.xeimo.mongodb.net/test?retryWrites=true&w=majority", 
                 {useNewUrlParser: true, useUnifiedTopology: true}); // Connection
var collection0 = "users"; // MongoDB Collection 
const schema0 = mongoose0.Schema({_id:{type:schema1.ObjectId},admin_approved:{type:Boolean}}); // Search Schema
const modal0 = mongoose0.model("modal1",schema0,collection0); // Mongoose Model                             
const express0 = require("express"); // Express
const router0 = express0.Router(); // Router
express0().use(express0.json()); // JSON Parser

function adminApprovalRequest(){
    router0.post("/",(req,res)=>{
        let id0 = req.body.id;
        console.log(id0);        
        let id1 = mongoose0.Types.ObjectId(id0);         
        modal0.findByIdAndUpdate(id1,{admin_approved:true},(err,res)=>console.log(res));
        res.end();
    })
}

adminApprovalRequest()

module.exports = router0;