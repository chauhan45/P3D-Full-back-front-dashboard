const USERS = require("../models/users.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.route( "/login" ).post(
    (req, res) => {
        const { email, password} = req.body;
        console.log(req.body);
        const token = req.cookies.jwt;
        if(token) {
            jwt.verify(token, process.env.JWTSECRET, (error, decodedToken) =>{
                if(error) {
                    console.log("error1");
                    console.log(error);
                }
                else {
                    console.log("decodedToken");
                    console.log(decodedToken);
                }
            } );
        } else {
            USERS.findOne({email: email}, (error, result) => {
                if(error) {
                    console.log("error2");
                    console.log(error);
                    // res.status(200).json("email incorrect");
                    throw error;
                }
                else{
                    // res.status(200).json("email correct");
                    console.log(result);
                    bcrypt.compare(password, result.password, (error, result) => {
                        if(error){
                            console.log("error3");
                            console.log(error);
                            throw error;
                        }
                        else {
                            // console.log("error3");
                            if(result){
                                console.log("Successfully loggined");
                                const token = createToken(result._id);
                                res.cookie( "jwt", token, { httpOnly: true, maxAge: 86400 * 200  } );
                                // .then(
                                //     (success) => {
                                //         res.status(200).json("Success run 6")
                                //     }
                                // ).catch(
                                //     (error) => {console.log(error)}
                                // );
                                res.status(200).json("successdone");
                            }
                            else{
                                res.status(200).json("password incorrect");
                            }
                        }
                    });
                }
            });
        }
        
    }
);

const createToken = (id) => {
    return jwt.sign( { id }, process.env.JWTSECRET, { expiresIn: 86400 * 200 } );
}

module.exports = router;

// 