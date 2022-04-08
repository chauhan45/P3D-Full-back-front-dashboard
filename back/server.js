const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const Users = require("./models/users.model");
require("dotenv").config();
const nodemailer = require("nodemailer");

// const requireAuth = require("./config/auth");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

const port = process.env.PORT || 5005;
const host = process.env.HOST;
const dburl = process.env.Amit;

const app = express();
app.use(express.json());

app.use(cors({
    origin:["http://localhost:3000","http://localhost:3001"],
    credentials:true
}));

app.use(cookieParser());

const dashboardLogin = require('./routes/dashboardLogin');

// app.use("/auth", requireAuth, dashboardLogin);

app.listen(port, host, () => {console.log("success run 1")} ); // This line

mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true} ).
then(() => {console.log("success run 3")}).
catch((error) => {console.log(error)});


mongoose.connection.once("open", () => {console.log("success run 2")});

// const USERS = require("../models/users.model");

// const weather = require('./routes/weather_api');
// app.use("/check", weather);

const create_user = require('./routes/createuser');
app.use("/user", create_user);

const is_confirm_email = require('./routes/is_confirm_email');
app.use("/confirm",is_confirm_email );

// const lasttemprature = require("./routes/weather_change_api");
// app.use("/weather", lasttemprature);

// const updateweather = require("./routes/update.weather");
// app.use("/update", updateweather);

const login = require("./routes/loginuser");
app.use("/auth", login);

const Forgotpassword = require("./routes/Forgotpassword");
app.use("/Forgot", Forgotpassword);

const Newpassword = require("./routes/Newpassword");
app.use("/newpass", Newpassword);

// const logout = require("./routes/logout");
// app.use("/auth", logout);


const architect_dashboard_login = require("./routes/architect_dashboard");
app.use("/architect_dashboard",architect_dashboard_login);

const adminApprovalRequest = require("./routes/adminApproved");
app.use("/admin-approval-request",adminApprovalRequest);

const deleteCustomer = require("./routes/deleteCustomer");
app.use("/admin-delete-customer",deleteCustomer);

const adminEditCustomer = require("./routes/adminEditCustomer");
app.use("/admin-edit-customer",adminEditCustomer);

const adminAddAdminPartnerCustomer = require("./routes/adminAddAdminPartnerCustomer");
app.use("/admin/add",adminAddAdminPartnerCustomer);

const adminFetchAdminPartnerCustomer = require('./routes/adminFetchAdminPartnerCustomer');
app.use("/admin/fetch", adminFetchAdminPartnerCustomer);

const adminEditAdminPartnerCustomer = require("./routes/adminEditAdminPartnerCustomer");
app.use("/admin/edit", adminEditAdminPartnerCustomer)

const customerDashboard = require('./routes/customerDashboard');
app.use("/customerDashboard", customerDashboard);

const partnerDashboard = require('./routes/partnerDashboard');
app.use("/partnerDashboard", partnerDashboard);

// Frontend routes

const frontCustomerAPI = require('./routes/frontCustomerAPI');
app.use('/frontendCustomer',frontCustomerAPI);