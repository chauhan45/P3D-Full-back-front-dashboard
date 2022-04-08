const mongoose = require("mongoose");
const schema = mongoose.Schema;

const requestDemoSchema0 = new schema(

    {               
        _id: {type: schema.ObjectId},
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        mobileNumber: {type: String},        
        address: {type: String},
        companyName: {type: String},
        companyType: {type: String},
        industryType: {type: String}        
    }
);

const requestDemoModel0 = mongoose.model("requestDemo0", requestDemoSchema0, "frontendRequestDemo");

module.exports = requestDemoModel0;


