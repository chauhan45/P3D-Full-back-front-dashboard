const USERS = require("../models/users.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer')



router.post('/Forgotpassword', (req, res) => { 
        let email0 = req.body.email;                    
        USERS.findOne({email: req.body.email})
            .then(user => {                                                     
                if (!user) {
                    res.status(200).json({ error: "User dont exists with that email" }),
                        console.log('User dont exists with that email')
                }
                
                // user.expireToken = Date.now() + 3600000
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'amit.c.dedicated@gmail.com',
                        pass: 'Bestadmin.@123'
                    }
                });                
                transporter.sendMail({
                    from: 'amit.c.dedicated@gmail.com',
                    to: 'amit.c.dedicated@gmail.com',
                    subject: 'hello world!',

                    // text : 'is conform email:http://localhost:3000/conform_email  <a herf="${url}">${url}</a> '
                    html :'<p>Hi There,</p>Reset yout password : <a href="http://localhost:3000/changepassword/?user='+email0+
                    '">Click Here</a> <br /> <p>  Kind Regards, <br /> Team Prediction3d </p> '

                    
                },(err)=>console.log(err));                
            })
    
})


module.exports = router;