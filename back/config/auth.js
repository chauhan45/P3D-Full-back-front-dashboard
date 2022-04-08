const USERS = require("../models/users.model");
const jwt = require("jsonwebtoken");
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
  
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token,process.env.JWTSECRET, (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.redirect('/login');
        } else {
          console.log(decodedToken);
          next();
        }
      });
    } else {
      res.status(404).json('not allowed')
      res.redirect('/');
    }
  };

  module.exports = requireAuth;
  