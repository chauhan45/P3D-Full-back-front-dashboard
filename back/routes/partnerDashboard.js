const USER = require("../models/users.model");
const userSchema = require("../models/model0");
const mongoose0 = require("mongoose");
const model0 = mongoose0.model("model4",userSchema,"users");
const router = require("express").Router();
const bcrypt0 = require("bcrypt");
const partnersModel = require("./../models/model2");
const formidable0 = require("formidable");
const fs0 = require("fs");
const customersModel = require("./../models/model1");

router.post("/fetch/own/appHeader",(req,res)=>{
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOne({_id:id0}).then((data)=>{         
        let fullName0 = data.firstName+" "+data.lastName;
        let profTitle0 = data.professionalTitle;
        let data0 = {fullName:fullName0,profTitle:profTitle0}
        res.send(data0)
        res.end();
    });
})

router.post("/edit/own/viewProfileContactProfilePicture",(req,res)=>{              
    let formidable1 = new formidable0.IncomingForm();
    formidable1.parse(req, function (err, fields, file0) {            
      let imageExtension0 = file0.profilePicture0.originalFilename.split(".")[1];      
      let path0 = file0.profilePicture0.filepath;      
      let random0 = Math.floor(Math.random() * 1000000000000000);      
      let path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/PartnerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
      while(!path1){
        random0 = Math.floor(Math.random() * 1000000000000000);
        path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/PartnerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
      }
      let path2 = random0 + "." + imageExtension0;                  
      let id0 = mongoose0.Types.ObjectId(req.cookies.id);
        fs0.rename(path0, path1, function (err) {              
            model0.findByIdAndUpdate(id0,{profileImage:path2},function (err, res) { console.log(res); });                  
        })
    })    
})

router.post("/search/allCustomers/",(req,res)=>{            
    let input0 = req.body.email;

    if(input0!=""){
        let pattern0 = `^${input0}`;
        let pattern1 = new RegExp(pattern0,'i');

        USER.find({email:pattern1},"_id").then(
            (success) => {                                   
                if(success.length>0){                    
                    res.json(success);
                    res.end();
                }
                else{                    
                    res.json("notFound");
                    res.end();  
                }
            }
        )    
    }
    else {
        res.json("noEmail");
        res.end();
    }
});

router.route("/fetch/customers").
post( 
    (req, res) => { 
        partnersModel.findById(req.cookies.id,(err,res0)=>{
            let companyName0 = res0.companyName+" - "+res0.firstName+" "+res0.lastName;
            console.log(companyName0);
            USER.find({user_type:"individual",companyName:companyName0,admin_approved:true}).then(
                (success) => {
                    console.log(success);
                    res.status(200).json(success);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                    res.status(500).json(error);
                }
            );
        });return;        
        
    }
);

router.post("/fetch/own/companyName",(req,res)=>{
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOne({_id:id0}).then((data)=>{                 
        let companyName0 = data.companyName+" - "+data.firstName+" "+data.lastName;        
        res.send(companyName0);
        res.end();
    });
})

router.post("/notificationPreference",(req,res)=>{    
    partnersModel.findByIdAndUpdate(req.cookies.id,{notificationPreference:req.body},{new:true}).then((data)=>{                         
        console.log(data);
    });
})

module.exports = router;