const USERS = require("../models/users.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var crypto = require('crypto');
format = require('biguint-format');
const customersModel = require("./../models/model1");
const partnersModel = require("./../models/model2");

router.route( "/admin" ).post(
    (req, res) => {
        const {firstName, lastName, email, mobileNumber, companyName, address, companyType, industryType, password, user_type} = req.body;                
        var email_approved = true;
        var is_deleted = false;
        var is_confirm_email =true;
        var confirm_code = Math.floor(Math.random()*10000000);
        var admin_approved = true;                     
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
                confirm_code
              
            }
        );        

        bcrypt.genSalt( 10 , (err, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hashed) => {                
                    newUser.password = hashed;
                    newUser.save()
            })                
        })                             
});
router.route( "/partner" ).post(
    (req, res) => {
        let {firstName, lastName, email, mobileNumber, companyName, streetAddress, city, state, zipCode, companyType, industryType, password, user_type} = req.body;                
        var email_approved = true;
        var is_deleted = false;
        var is_confirm_email =true;
        var confirm_code = Math.floor(Math.random()*10000000);
        var admin_approved = true;      
        var notificationsPreference = "empty";               
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
                notificationsPreference
            }
        );        

        bcrypt.genSalt( 10 , (err, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hashed) => {                
                    newUser.password = hashed;
                    newUser.save()
            })                
        })                             
});
router.route( "/customer" ).post(
    (req, res) => {                
        let {firstName, lastName, email, mobileNumber, companyName, streetAddress, city, state, zipCode, companyType, industryType, password, user_type} = req.body;                
        var email_approved = true;
        var is_deleted = false;
        var is_confirm_email =true;
        var confirm_code = Math.floor(Math.random()*10000000);
        var admin_approved = true;
        var notificationsPreference = "empty";
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
                notificationsPreference
            }
        );        

        bcrypt.genSalt( 10 , (err, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hashed) => {                
                    newUser.password = hashed;
                    newUser.save()
            })                
        })                             
});
module.exports = router;
