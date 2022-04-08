const mongoose0 = require("../database") // MongoDB Connection
const mongoose1 = require("mongoose") // Mongoose
const schema1 = mongoose1.Schema;
var collection0 = "users"; // MongoDB Collection 
const schema0 = mongoose1.Schema({_id:{type:schema1.ObjectId},email:{type:String},password:{type:String},user_type:{type:String},admin_approved:{type:Boolean},is_confirm_email:{type:Boolean},is_deleted:{type:Boolean}}); // Search Schema
const modal0 = mongoose0.model("modal0",schema0,collection0); // Mongoose Model                             
const express0 = require("express"); // Express
const bcrypt = require("bcrypt");
const router0 = express0.Router(); // Router

class Authentication{
    static Execution(){
        router0.post("/login", 
            (req,res) => {                                                                                                                               
                let email0 = req.body.email;
                let password0 = req.body.password;                  
                modal0.findOne({email:email0}).then((data)=>{                                        
                    if(data){                                                                                                                                                                                                                                   
                        let password1 = data.password;
                        let id0 = String(data._id);                        
                        bcrypt.compare(password0, password1, function(err, result) {
                            if(result){                                                                                                                                                                                            
                                if(data.user_type=="admin"){                                          
                                    if(data.is_deleted===true){                                  
                                        res.send("admin_archived");
                                        res.end();
                                    }
                                    else if(data.is_deleted===false){
                                        res.cookie("isAdmin","true",{path:"/",maxAge:86400000,httpOnly:true});
                                        res.cookie("id",id0,{path:"/",maxAge:86400000,httpOnly:true});
                                        res.send("admin_true");
                                        res.end();
                                    }
                                    else{
                                        return;
                                    }                                    
                                }
                                else if(data.user_type=="partner"){                                                                                  
                                    if(data.admin_approved===false){                                        
                                        res.send("partner_admin_not_approved");
                                        res.end();
                                    }
                                    else if(data.is_confirm_email===false){
                                        res.send("partner_email_not_confirmed");
                                        res.end();
                                    }
                                    else if(data.is_deleted===true){
                                        res.send("partner_archived");
                                        res.end();
                                    }
                                    else if(data.admin_approved===true&&data.is_confirm_email===true&&data.is_deleted===false){
                                        res.cookie("isPartner","true",{path:"/",maxAge:86400000,httpOnly:true});
                                        res.cookie("id",id0,{path:"/",maxAge:86400000,httpOnly:true});
                                        res.send("partner_true");
                                        res.end()
                                    }
                                    else{
                                        return;
                                    }
                                }
                                else if(data.user_type==="individual"){
                                    if(data.admin_approved==false){
                                        res.send("customer_admin_not_approved");
                                        res.end();
                                    }
                                    else if(data.is_confirm_email===false){
                                        res.send("customer_email_not_confirmed");
                                        res.end();res.end();
                                    }
                                    else if(data.is_deleted===true){
                                        res.send("customer_archived");
                                        res.end();
                                    }
                                    else if(data.admin_approved===true&&data.is_confirm_email===true&&data.is_deleted===false){
                                        res.cookie("isCustomer","true",{path:"/",maxAge:86400000,httpOnly:true});
                                        res.cookie("id",id0,{path:"/",maxAge:86400000,httpOnly:true});
                                        res.send("customer_true");
                                        res.end();
                                    }
                                    else{
                                        return;
                                    }
                                }
                            }
                            else{
                                res.send("password_false");                        
                                res.end();                                    
                            }
                        });                                                                 
                    }else{
                        res.send("email_false");                        
                        res.end();
                    }
                });                                                                                              
            }
        )
        router0.post("/logout", 
            (req,res) => {                                   
                res.clearCookie("isAdmin",{path:"/"});
                res.clearCookie("isPartner",{path:"/"});
                res.clearCookie("isCustomer",{path:"/"});
                res.clearCookie("id",{path:"/"});
                res.send("loggedOut");
                res.end();
            }
        )
        router0.get("/check", 
            (req,res) => {                                
                if(req.cookies.isAdmin==="true"){
                    res.send("adminTrue");
                    res.end();
                }
                else if(req.cookies.isPartner==="true"){
                    res.send("partnerTrue");
                    res.end();
                }
                else if(req.cookies.isCustomer==="true"){
                    res.send("customerTrue");
                    res.end();
                }
                else{
                    res.end();
                }
            }
        )
    }      
}
Authentication.Execution(); // Execution

module.exports = router0; // Export