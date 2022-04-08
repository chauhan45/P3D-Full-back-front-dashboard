const USER = require("../models/users.model");
const userSchema = require("../models/model0");
const mongoose0 = require("mongoose");
const model0 = mongoose0.model("model4",userSchema,"users");
const router = require("express").Router();
const bcrypt0 = require("bcrypt");
const formidable0 = require("formidable");
const fs0 = require("fs");
const customersModel = require("./../models/model1");

router.post("/fetch/own/viewProfileContact",(req,res)=>{
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOne({_id:id0}).then((data)=>{         
        let firstName0 = data.firstName;
        let lastName0 = data.lastName;
        let profTitle0 = data.professionalTitle;
        let email0 = data.email;
        let mobileNumber0 = data.mobileNumber;
        let address0 = data.address;
        let profileImage0 = data.profileImage
        let data0 = {
            firstName:firstName0,
            lastName:lastName0,
            profTitle:profTitle0,
            email:email0,
            mobileNumber:mobileNumber0,
            address:address0,
            profileImage: profileImage0
        }
        res.send(data0)
        res.end();
    });
})

router.post("/fetch/own/viewProfileDetails",(req,res)=>{
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOne({_id:id0}).then((data)=>{                 
        let email0 = data.email;        
        let data0 = {            
            email:email0,            
        }
        res.send(data0);
        res.end();
    });
})

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
      let path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/CustomerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
      while(!path1){
        random0 = Math.floor(Math.random() * 1000000000000000);
        path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/CustomerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
      }
      let path2 = random0 + "." + imageExtension0;                  
      let id0 = mongoose0.Types.ObjectId(req.cookies.id);
        fs0.rename(path0, path1, function (err) {              
            model0.findByIdAndUpdate(id0,{profileImage:path2},function (err, res) { console.log(res); });                  
        })
    })    
})

router.post("/edit/own/viewProfileContact",(req,res)=>{
    let data0 = {
        firstName: req.body.firstName0,
        lastName: req.body.lastName0,
        professionalTitle: req.body.profTitle0,
        mobileNumber: req.body.mobileNumber0,
        email: req.body.email0,
        address: req.body.address0     
    }    
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOneAndUpdate({_id:id0},data0).then((res0)=>{        
        res.send(res0);
        res.end();
    });
})

router.post("/edit/own/viewProfileDetails",(req,res)=>{
    let data0 = {        
        email: req.body.email0,        
    }    
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOneAndUpdate({_id:id0},data0).then((res0)=>{        
        res.send(res0);
        res.end();
    });
})

router.post("/edit/own/viewProfileSecurity/password",(req,res)=>{                  
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);             
    bcrypt0.genSalt(10, (err,salt)=>{
        bcrypt0.hash(req.body.password0,salt,(err,hashed0)=>{            
            model0.findByIdAndUpdate(id0,{password:hashed0},(err,res)=>{console.log(res)});
        })
    })    
})

router.post("/fetch/own/viewProfileBilling",(req,res)=>{
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOne({_id:id0}).then((data)=>{         
        let firstName0 = data.firstName;
        let lastName0 = data.lastName;
        let profTitle0 = data.professionalTitle;
        let email0 = data.email;
        let mobileNumber0 = data.mobileNumber;
        let address0 = data.address;
        let profileImage0 = data.profileImage;
        let data0 = {
            firstName:firstName0,
            lastName:lastName0,
            profTitle:profTitle0,
            email:email0,
            mobileNumber:mobileNumber0,
            address:address0,
            profileImage:profileImage0
        }
        res.send(data0)
        res.end();
    });
})

router.post("/edit/own/viewProfileBilling",(req,res)=>{
    let data0 = {
        firstName: req.body.firstName0,
        lastName: req.body.lastName0,
        professionalTitle: req.body.profTitle0,
        mobileNumber: req.body.mobileNumber0,
        email: req.body.email0,
        address: req.body.address0        
    }    
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOneAndUpdate({_id:id0},data0).then((res0)=>{        
        res.send(res0);
        res.end();
    });
})

router.post("/notificationPreference",(req,res)=>{    
    customersModel.findByIdAndUpdate(req.cookies.id,{notificationPreference:req.body},{new:true}).then((data)=>{                         
        console.log(data);
    });
})

module.exports = router;