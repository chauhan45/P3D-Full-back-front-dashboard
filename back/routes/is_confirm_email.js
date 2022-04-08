const USER = require("../models/users.model");
const router = require("express").Router();

// router.route("/user").
// post( 
//     (req, res) => {
       
//         var query = {'email': req.email};
//         req.newData.is_confirm_email = req.USER.is_confirm_email;

//         USER.findOneAndUpdate(query, req.newData, {is_confirm_email: true}, function(err, doc) {
//             if (err) return res.send(500, {error: err});
//             return res.send('Succesfully saved.');
//         })

//     }
// );


router.route("/is_confirm_email").
post( 
    (req, res) => {
        var {email, code} = req.body;
        var query = {email: email, confirm_code: code};

        USER.updateOne(
            query, 
            {is_confirm_email : true},
            function (err, numAffected) {
                console.log(numAffected);
            }
        );
        // let doc = await USER.findOneAndUpdate(
        //     query, 
        //     {is_confirm_email: true}, 
        //     {
        //         new: true
        //     }
        // );
        return res.status(200).send("Email: " + email + ", code: "+ code);       
    }
);

module.exports = router;

// City wise weather check