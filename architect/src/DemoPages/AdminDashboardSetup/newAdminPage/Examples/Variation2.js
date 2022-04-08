import React, { Component } from 'react';
// import LoginForm from './LoginForm'
// import { ModalBoxPri } from './Modal/ModalBox'
// import { NavLink } from 'react-router-dom'
import axios from 'axios';

export default class AdminDashboardNewAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            success: '',
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            companyName: 'P3D',
            address: '',
            companyType: 'P3D',
            industryType: 'P3D',
            password: '',
            confirmPassword: '',
            
            formErrors: {}
        };
        this.initialState = this.state;
        this.onSubmit = this.onSubmit.bind(this);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCompanyType = this.onChangeCompanyType.bind(this);
        this.onChangeIndustryType = this.onChangeIndustryType.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    handleFormValidation() {
        const { firstName, lastName, email, mobileNumber, password, confirmPassword, companyName, address, companyType, industryType } = this.state;
        let formErrors = {};
        let formIsValid = true;

        //Student name     
        if (!firstName) {
            formIsValid = false;
            formErrors["firstNameErr"] = "Name is required.";
        }
        if (!lastName) {
            formIsValid = false;
            formErrors["lastNameErr"] = "lastName is required.";
        }

        //Email    
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            formIsValid = false;
            formErrors["emailErr"] = "Invalid email id.";
        }

        // //Phone number    
        if (!mobileNumber) {
            formIsValid = false;
            formErrors["mobileNumberErr"] = "mobileNumber  is required.";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(mobileNumber)) {
                formIsValid = false;
                formErrors["mobileNumberErr"] = "Invalid mobileNumber number.";
            }
        }

        // password
        if (!password) {
            formIsValid = false;
            formErrors["passwordErr"] = "password  is required.";
        }

        if (!confirmPassword){
            formIsValid = false;
            formErrors["confirmPasswordErr"] = "confirm password is required.";
        }

        if (confirmPassword!==""&&password!==confirmPassword){
            formIsValid = false;
            formErrors["confirmPasswordErr"] = "passwords dont match";
        }

        // else {    
        //     var RegExp = '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$';
        //     if (!RegExp.test(password)) {    
        //         formIsValid = false;    
        //         formErrors["passwordErr"] = "Invalid password number.";    
        //     }    
        // } 


        if (!companyName) {
            formIsValid = false;
            formErrors["companyNameErr"] = "companyName is required.";
        }

        if (!address) {
            formIsValid = false;
            formErrors["addressErr"] = "address is required.";
        }
        // //companyType    
        if (companyType === '' || companyType === "select") {
            formIsValid = false;
            formErrors["companyTypeErr"] = "Select companyType.";
        }
        // industryType  
        if (industryType === '' || industryType === "select") {
            formIsValid = false;
            formErrors["industryTypeErr"] = "Select industryType.";
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    // onSubmit = (e) => {    
    //     e.preventDefault();    

    //     if (this.handleFormValidation()) {    
    //         alert('You have been successfully registered.')    
    //         this.setState(this.initialState)    
    //     }    
    // }


    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value });
    }
    onChangeLastName(e) {
        this.setState({ lastName: e.target.value });
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangeMobileNumber(e) {
        this.setState({ mobileNumber: e.target.value });
    }
    onChangeCompanyName(e) {
        this.setState({ companyName: e.target.value });
    }
    onChangeAddress(e) {
        this.setState({ address: e.target.value });
    }
    onChangeCompanyType(e) {
        this.setState({ companyType: e.target.value });
    }
    onChangeIndustryType(e) {
        this.setState({ industryType: e.target.value });
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    onChangeConfirmPassword(e){
        this.setState({confirmPassword: e.target.value})
    }
    onReset(e) {
        this.setState({ firstName: "" });
        this.setState({ lastName: "" });
        this.setState({ email: "" });
        this.setState({ mobileNumber: "" });
        this.setState({ companyName: "" });
        this.setState({ address: "" });
        this.setState({ companyType: "" });
        this.setState({ industryType: "" });
        this.setState({ password: "" });
        this.setState({ confirmPassword: "" });
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.handleFormValidation()) {
            alert('You have been successfully registered.')
            this.setState(this.initialState)            
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                mobileNumber: this.state.mobileNumber,
                companyName: this.state.companyName,
                address: this.state.address,
                companyType: this.state.companyType, 
                industryType: this.state.industryType,
                password: this.state.password,                
                user_type: "admin",
                
            };            
            axios.post("/admin/add/admin", data)
                .then((result) => { console.log(result); })
                .catch((error) => { console.log(error); });
        }
    }

    render() {
        const { firstNameErr, lastNameErr, emailErr, mobileNumberErr, passwordErr, confirmPasswordErr, companyNameErr, addressErr, companyTypeErr, industryTypeErr } = this.state.formErrors;
        return (
            <>
                <section class="section-border border-primary">
                    <div class="container d-flex flex-column">
                        <div class="row align-items-center justify-content-center gx-0 min-vh-100">
                            <div class="col-12 col-md-5 col-lg-10 py-8 py-md-11">
                                <h1 class="mb-0 fw-bold text-center Sign_bold">
                                    Sign Up
                                </h1>
                                <p class="mb-6 text-center text-muted">
                                    Simplify your workflow in minutes.
                                </p>
                                <form class="mb-6" onSubmit={this.onSubmit}>
                                    <div class="row">

                                        <div class="form-group col-md-6">

                                            <label class="form-label" for="first-name">
                                                First Name
                                            </label>
                                            <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} id="first-name" name="first-name" placeholder="First Name"
                                                className="form-control  {firstNameErr ? ' showError' : ''}" />
                                            {firstNameErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{firstNameErr}</div>
                                            }



                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="form-label" for="last-name">
                                                Last Name
                                            </label>
                                            <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} id="last-name" name="last-name" placeholder="Last Name"
                                                className="form-control {lastNameErr ? ' showError' : ''}" />
                                            {lastNameErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{lastNameErr}</div>
                                            }

                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="form-group col-md-6">
                                            <label class="form-label" for="email">
                                                Email Address
                                            </label>
                                            <input type="email" value={this.state.email} onChange={this.onChangeEmail} id="email" name="email" placeholder="name@address.com"
                                                className="form-control emailErr {emailErr ? ' showError' : ''}" />
                                            {emailErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
                                            }
                                        </div>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="mobile-number">
                                                Mobile Number
                                            </label>
                                            <input type="text" value={this.state.mobileNumber} onChange={this.onChangeMobileNumber} id="mobile-number" name="mobile-number" placeholder="Mobile Number"
                                                className="form-control {mobileNumberErr ? ' showError' : ''} " />
                                            {mobileNumberErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{mobileNumberErr}</div>
                                            }
                                        </div>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="password">
                                                Password
                                            </label>
                                            <input type="password" value={this.state.password} onChange={this.onChangePassword} id="password" name="password" placeholder="Password"
                                                className="form-control { passwordErr ? ' showError' : ''} " />
                                            {passwordErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
                                            }
                                        </div>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="password">
                                                Confirm Password
                                            </label>
                                            <input type="password" value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"
                                                className="form-control" />
                                            {confirmPasswordErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{confirmPasswordErr}</div>
                                            }
                                        </div>
                                    </div>
                                    {/* <div class="form-group mb-5">
                                        <label class="form-label" for="company-name">
                                            Company Name
                                        </label>
                                        <input type="text" value={this.state.companyName} onChange={this.onChangeCompanyName} id="company-name" name="company-name" placeholder="Company Name"
                                            className="form-control {companyNameErr ? ' showError' : ''} " />
                                        {companyNameErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{companyNameErr}</div>
                                        }
                                    </div> */}
                                    <div class="form-group mb-5">
                                        <label class="form-label" for="address">
                                            Address
                                        </label>
                                        <textarea class="form-control" value={this.state.address} onChange={this.onChangeAddress} id="address" name="address" placeholder="Address">
                                            className= " form-control{addressErr ? ' showError' : ''} " </textarea>
                                        {addressErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>
                                        }
                                    </div>
                                    {/* <div class="row form-group">
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="company-type">
                                                Company Type
                                            </label>
                                            <select type="text" value={this.state.companyType} onChange={this.onChangeCompanyType} id="company-type" name="company-type"
                                                className="form-control {companyTypeErr ? ' showError' : ''} " >
                                                <option value="" disabled>
                                                    Select..
                                                </option>
                                                <option value="General Contractor">
                                                    General Contractor
                                                </option>
                                                <option value="Sub Contractor">Sub Contractor</option>
                                                <option value="Architect">Architect</option>
                                                <option value="Design firm">Design firm</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {companyTypeErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{companyTypeErr}</div>
                                            }
                                        </div>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="industry-type">
                                                Industry Type
                                            </label>
                                            <select type="text" value={this.state.industryType} onChange={this.onChangeIndustryType} id="industry-type" name="industry-type"
                                                className="form-control {industryTypeErr ? ' showError' : ''}" >
                                                <option value="" disabled>
                                                    Select..
                                                </option>
                                                <option value="Residential">Residential</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="Industrial">Industrial</option>
                                                <option value="Municipal">Municipal</option>
                                            </select>
                                            {industryTypeErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{industryTypeErr}</div>
                                            }
                                        </div>
                                    </div> */}
                                    <div class="  form-group text-center button-1 ">
                                        <button class="btn w-30 btn-primary " type="submit">Sign Up </button> &nbsp; &nbsp;
                                        <button type="reset" class="btn btn-outline-secondary clear" onClick={this.onReset}>Clear Values</button>
                                    </div>
                                </form>
                                {/* <p class="mb-0 fs-sm text-center text-muted">
                                    Already have an account? <ModalBoxPri btn="Login" content={<LoginForm />} modalClass="loginbutton"
                />
                                </p> */}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
