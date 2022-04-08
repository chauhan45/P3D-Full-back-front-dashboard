const USER = require("../models/users.model");
const requestDemoModel = require("../models/requestDemoModel");
const requestDemoModel0 = require("../models/requestDemoModel0");
const userSchema = require("../models/model0");
const mongoose0 = require("mongoose");
const model0 = mongoose0.model("model3",userSchema,"users");
const router = require("express").Router();

router.route("/customers").
post( 
    (req, res) => {               
        USER.find({user_type:"individual",is_deleted:false,admin_approved:true}).sort({admin_approved:1,updatedAt:-1}).then(
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
    }
);
router.route("/customers/archived").
post( 
    (req, res) => {               
        USER.find({user_type:"individual",is_deleted:true}).then(
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
        

    }
);
router.route("/customer/requestDemo").
post((req,res)=>{
    requestDemoModel.find().then(
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
})
router.post("/customer/search",(req,res)=>{
    USER.findOne({email:req.body.email,user_type:"individual"}).then((data)=>{
        if(data){
            let firstName0 = data.firstName;
            let lastName0 = data.lastName;        
            let email0 = data.email;
            let mobileNumber0 = data.mobileNumber;
            let address0 = data.address;
            let companyName0 = data.companyName
            let data0 = {
                firstName:firstName0,
                lastName:lastName0,         
                email:email0,
                mobileNumber:mobileNumber0,
                address:address0,
                companyName:companyName0
            }
            res.send(data0)
            res.end();
        }
        else{
            res.send({error:"noEmail"});
            res.end();
        }
    })
});

router.post("/allCustomers/search",(req,res)=>{            
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
        res.json("noEmail")
        res.end()
    }
})

router.post("/allArchivedCustomers/search",(req,res)=>{            
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
        res.json("noEmail")
        res.end()
    }
})

router.route("/partners").
post( 
    (req, res) => {               
        USER.find({user_type:"partner",is_deleted:false,admin_approved:true}).sort({admin_approved:1,updatedAt:-1}).then(
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
        

    }
);
router.route("/partners/archived").
post( 
    (req, res) => {               
        USER.find({user_type:"partner",is_deleted:true}).then(
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
        

    }
);
router.route("/partner-company-name").
post( 
    (req, res) => {               
        USER.find({user_type:"partner"},{"companyName":1,"firstName":1,"lastName":1}).then(
            (success) => {                
                res.status(200).json(success);
            }
        )
        .catch(
            (error) => {
                console.log(error);
                res.status(500).json(error);
            }
        );    
    }
);
router.post("/partner/search",(req,res)=>{
    USER.findOne({email:req.body.email,user_type:"partner"}).then((data)=>{
        if(data){
            let firstName0 = data.firstName;
            let lastName0 = data.lastName;        
            let email0 = data.email;
            let mobileNumber0 = data.mobileNumber;
            let address0 = data.address;
            let companyName0 = data.companyName
            let data0 = {
                firstName:firstName0,
                lastName:lastName0,         
                email:email0,
                mobileNumber:mobileNumber0,
                address:address0,
                companyName:companyName0
            }
            res.send(data0)
            res.end();
        }
        else{
            res.send({error:"noEmail"});
            res.end();
        }
    })
})

router.post("/allPartners/search",(req,res)=>{            
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
        res.json("noEmail")
        res.end()
    }
});

router.post("/allArchivedPartners/search",(req,res)=>{            
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
        res.json("noEmail")
        res.end()
    }
})

router.route("/admins").
post( 
    (req, res) => {               
        USER.find({user_type:"admin",is_deleted:false}).sort({admin_approved:1,updatedAt:-1}).then(
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
        

    }
);
router.post("/admin/appHeader",(req,res)=>{
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOne({_id:id0}).then((data)=>{         
        let fullName0 = data.firstName+" "+data.lastName;
        let profTitle0 = data.professionalTitle;
        let data0 = {fullName:fullName0,profTitle:profTitle0}
        res.send(data0)
        res.end();
    });
})
router.post("/admin/viewProfile",(req,res)=>{
    let id0 = mongoose0.Types.ObjectId(req.cookies.id);
    model0.findOne({_id:id0}).then((data)=>{         
        let firstName0 = data.firstName;
        let lastName0 = data.lastName;
        let profTitle0 = data.professionalTitle;
        let email0 = data.email;
        let mobileNumber0 = data.mobileNumber;
        let address0 = data.address;
        let image0 = data.profileImage;
        let data0 = {
            firstName:firstName0,
            lastName:lastName0,
            profTitle:profTitle0,
            email:email0,
            mobileNumber:mobileNumber0,
            address:address0,
            profileImage:image0
        }
        res.send(data0);
        res.end();
    });
})



router.post("/admins/search",(req,res)=>{
    USER.findOne({email:req.body.email,user_type:"admin"}).then((data)=>{
        if(data){            
            res.send(data._id)
            res.end();
        }
        else{
            res.send({error:"noEmail"});
            res.end();
        }
    })
})
router.route("/admins/archived").
post( 
    (req, res) => {               
        USER.find({user_type:"admin",is_deleted:true}).then(
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
        

    }
);

router.post("/allAdmins/search",(req,res)=>{            
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
        res.json("noEmail")
        res.end()
    }
})

router.post("/allArchivedAdmins/search",(req,res)=>{            
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
        res.json("noEmail")
        res.end()
    }
})


router.post("/demoRequest",(req,res)=>{            
    let input0 = req.body.email;

    if(input0!=""){
        let pattern0 = `^${input0}`;
        let pattern1 = new RegExp(pattern0,'i');

        requestDemoModel0.find({email:pattern1}).then(
            (success) => {                   
                if(success.length>1){                    
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
        res.json("noEmail")
        res.end()
    }
})

router.route("/unapproved/partners").
post( 
    (req, res) => {               
        USER.find({user_type:"partner",is_deleted:false,admin_approved:false}).sort({updatedAt:-1}).then(
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
        

    }
);

router.route("/unapproved/customers").
post( 
    (req, res) => {               
        USER.find({user_type:"individual",is_deleted:false,admin_approved:false}).sort({updatedAt:-1}).then(
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
        

    }
);

module.exports = router;

// City wise weather check