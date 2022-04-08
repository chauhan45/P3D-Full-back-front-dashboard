const USERS = require("../models/users.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var crypto = require('crypto');
format = require('biguint-format');
const formidable0 = require("formidable");
const fs0 = require("fs");
const util = require("util");

// messege
// const twilioNumber = '+13515296938';
//  ACCOUNT_SID = 'YAC61c668bf0166c21cc446728f8297c3ca'
// AUTH_TOKEN = '8f5767ef79786c9a2424554bcb2a4139'
// SERVICE_SID = 'MG0685b4fe9025af44f184d6b6d2e4d8ab'
// const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);



// cZx01avA0ngrarz_UZIsepewYRcXukoFrnWaCRIa
// sid IS69a5a32a74d81aa2aec64b1f1e4c9bd1
// number  	+13515296938

router.route( "/add" ).post(
    (req, res) => {        
        let formidable1 = new formidable0.IncomingForm();
        formidable1.parse(req, function (err, fields, file0) {            
            let imageExtension0 = file0.profilePicture0.originalFilename.split(".")[1];      
            let path0 = file0.profilePicture0.filepath;        
            let random0 = Math.floor(Math.random() * 1000000000000000);
            let path1;
            if(fields.user_type==="partner"){    
                path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/PartnerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
                while(!path1){
                    random0 = Math.floor(Math.random() * 1000000000000000);
                    path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/PartnerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
                }
            }
            if(fields.user_type==="individual"){    
                path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/CustomerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
                while(!path1){
                    random0 = Math.floor(Math.random() * 1000000000000000);
                    path1 = '/home/rv/Desktop/P3D/main/p3dbackup/architect/src/DemoPages/CustomerDashboardSetup/assets/profilePictures/' + random0 + "." + imageExtension0;
                }
            }
            let path2 = random0 + "." + imageExtension0;                              
            fs0.rename(path0, path1,(err,res)=>{});
            let {firstName, lastName, email, mobileNumber, companyName, streetAddress, city, state, zipCode, companyType, industryType, password, user_type} = fields;        
            var email_approved = false;
            var is_deleted = false;
            var is_confirm_email =false;
            var confirm_code = Math.floor(Math.random()*10000000);
            var admin_approved = false;
            var resetpassword = Math.floor(Math.random()*10000000); 
            let notificationPreference = {"preference":false};
            let profileImage = path2;                   
            address = streetAddress+","+city+","+state+","+zipCode;
            const newUser = new USERS(
                {
                    firstName,
                    lastName,
                    email,
                    mobileNumber,
                    companyName,
                    address,
                    companyType,
                    industryType, 
                    password,
                    email_approved,
                    user_type,
                    admin_approved,
                    is_deleted,
                    is_confirm_email,
                    confirm_code,
                    resetpassword,
                    notificationPreference ,
                    profileImage                             
                }
            );
            bcrypt.genSalt( 10 , (err, salt) => {
                bcrypt.hash(newUser.password, salt, (error, hashed) => {
                    if(error){
                        console.log(error);
                    }
                    else {
                        console.log(hashed);
                        newUser.password = hashed;
                        newUser.save()
                        .then( (success) => {
    
                          var nodemailer = require('nodemailer');
                          var transporter = nodemailer.createTransport({
                              service: 'Gmail',
                              auth: {
                                  user: 'amit.c.dedicated@gmail.com',
                                  pass: 'Bestadmin.@123'
                              }
                          });
                          
                          console.log('created');
                          transporter.sendMail({
                          from: 'amit.c.dedicated@gmail.com',
                            to: 'amit.c.dedicated@gmail.com',
                            subject: 'P3D - Account Confirmation',  
                          
                            // text : 'is conform email:http://localhost:3000/conform_email  <a herf="${url}">${url}</a> '
                            html :'<p>Hi There,</p><h3>Complete your P3D signup</h3> Please confirm your email : <a href="http://localhost:3000/ConfirmEmail/?user='+email
                            +'&id='+confirm_code+'">Click Here</a> <br /> <i>Kindly ignore this message if you did not signup. </i> <p>  Kind Regards, <br /> Team Prediction3d </p> '
                          });
    
                              // messege send mobile
                         
                            //   client.messages.create({
                            //     body: 'Hello from Node',
                            //     to: '+13515296938',
                            //     from: '+918353981705'
                            //  }).then(message => console.log(message))
                            //    // here you can implement your fallback code
                            //    .catch(error => console.log(error))
                             
        
        
        
                             // messege send mobile end
                        
                          console.log(success); 
                          
                    
                        })
                        
                           
                    }
                } );
            } );
            res.status(200).json("Success run 6");
        });          
        // password  = bcrypt(oldpassword, salt);
        
    }
);
module.exports = router;