const mongoose = require("mongoose");
const schema = mongoose.Schema;

const requestDemoSchema = new schema(

    {               
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        mobileNumber: {type: String, required: true},        
        address: {type: String, required: true},
        companyName: {type: String, required: true},
        companyType: {type: String, required: true},
        industryType: {type: String, required: true}        
    }
);

const requestDemoModel = mongoose.model("requestDemo", requestDemoSchema, "frontendRequestDemo");

module.exports = requestDemoModel;


