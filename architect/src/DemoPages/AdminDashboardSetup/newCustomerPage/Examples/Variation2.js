import React, { Component } from 'react';
// import LoginForm from './LoginForm'
// import { ModalBoxPri } from './Modal/ModalBox'
// import { NavLink } from 'react-router-dom'
import axios from 'axios';
import $ from "jquery";

export default class AdminDashboardNewCustomerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            success: '',
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',            
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            companyName: 'P3D',
            companyType: '',
            industryType: '',
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
        this.onChangeStreetAddress = this.onChangeStreetAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeCompanyType = this.onChangeCompanyType.bind(this);
        this.onChangeIndustryType = this.onChangeIndustryType.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onReset = this.onReset.bind(this);
        this.partnerCompanyName = this.partnerCompanyName.bind(this);        
    }

    handleFormValidation() {
        const { firstName, lastName, email, mobileNumber, password, confirmPassword, streetAddress, city, state, zipCode, companyType, industryType } = this.state;
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

        if (!streetAddress) {
            formIsValid = false;
            formErrors["streetAddressErr"] = "streetAddress is required.";
        }

        if (!city) {
            formIsValid = false;
            formErrors["cityErr"] = "city is required.";
        }

        if (!state) {
            formIsValid = false;
            formErrors["stateErr"] = "state is required.";
        }

        if (!zipCode) {
            formIsValid = false;
            formErrors["zipCodeErr"] = "zipCode is required.";
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
    onChangeStreetAddress(e) {
        this.setState({ streetAddress: e.target.value });
    }
    onChangeCity(e) {
        this.setState({ city: e.target.value });
    }
    onChangeState(e) {
        this.setState({ state: e.target.value });
    }
    onChangeZipCode(e) {
        this.setState({ zipCode: e.target.value });
    }
    onChangeCompanyName(e) {
        this.setState({ companyName: e.target.value });
    }
    onChangeCompanyType(e) {
        this.setState({ companyType: e.target.value });
        if(e.target.value==="Other"){      
            document.getElementById("company-type").disabled = true;      
            document.getElementById("companyTypeOther").style.display = "block";
            this.setState({ companyType: "" });
        }
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
        this.setState({ streetAddress: "" });
        this.setState({ city: "" });
        this.setState({ state: "" });
        this.setState({ zipCode: "" });
        this.setState({ companyType: "" });
        this.setState({ industryType: "" });
        this.setState({ password: "" });
        this.setState({ confirmPassword: "" });
    }

    partnerCompanyName(){
        axios.post("/backend/admin/fetch/partner-company-name")
             .then( result0 => {                
                 for(let key0 in result0.data){   
                    $("<option>",{
                        value: result0.data[key0]["companyName"]+" - "+result0.data[key0]["companyName"]+" "+result0.data[key0]["companyName"]
                    }).text(result0.data[key0]["companyName"]+" - "+result0.data[key0]["companyName"]+" "+result0.data[key0]["companyName"])
                    .appendTo("#partnerCompanyNameSelect")                                                          
                 }
             })
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.handleFormValidation()) {
            alert('You have been successfully registered.')                       
            const data = {
                firstName: String(this.state.firstName),
                lastName: String(this.state.lastName),
                email: String(this.state.email),
                mobileNumber: String(this.state.mobileNumber),
                companyName: String(this.state.companyName),
                streetAddress: String(this.state.streetAddress),
                city: String(this.state.city),
                state: String(this.state.state),
                zipCode: String(this.state.zipCode),
                companyType: String(this.state.companyType), 
                industryType: String(this.state.industryType),
                password: String(this.state.password),
                user_type: "customer",
                
            };            
            axios.post("/admin/add/customer", data)
                .then((result) => { console.log(result); })
                .catch((error) => { console.log(error); });
            this.setState(this.initialState);
        }
    }

    componentDidMount(){
        this.partnerCompanyName();
    }

    render() {
        const { firstNameErr, lastNameErr, emailErr, mobileNumberErr, passwordErr, confirmPasswordErr, streetAddressErr, cityErr, stateErr, zipCodeErr, companyTypeErr, industryTypeErr } = this.state.formErrors;
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
                                    <div class="form-group mb-5">
                                        <label class="form-label" for="company-name">
                                            Company Name
                                        </label>
                                        <select id="partnerCompanyNameSelect" className="form-control" onChange={this.onChangeCompanyName} value={this.state.companyName}>                                             
                                            <option value="P3D">P3D</option>
                                        </select>                                                                                                                        
                                    </div>
                                    <h6>Address</h6>
                                    <br/>
                                    <div className='row form-group'>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="street-address">
                                                Street Address
                                            </label>
                                            <input className="form-control" value={this.state.streetAddress} onChange={this.onChangeStreetAddress} id="street-address" name="street-address" placeholder="Street Address"/>                                            
                                            {streetAddressErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{streetAddressErr}</div>
                                            }
                                        </div>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="city">
                                                City
                                            </label>
                                            <input className="form-control" value={this.state.city} onChange={this.onChangeCity} id="city" name="city" placeholder="City"/>
                                            {cityErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>
                                            }
                                        </div>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="state">
                                                State
                                            </label>
                                            <input className="form-control" value={this.state.state} onChange={this.onChangeState} id="state" name="state" placeholder="State"/>                                            
                                            {stateErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{stateErr}</div>
                                            }
                                        </div>
                                        <div class="form-group mb-5 col-md-6">
                                            <label class="form-label" for="address">
                                                Zip Code
                                            </label>
                                            <input className="form-control" value={this.state.address} onChange={this.onChangeZipCode} id="zip-code" name="zip-code" placeholder="Zip Code"/>                                            
                                            {zipCodeErr &&
                                                <div style={{ color: "red", paddingBottom: 10 }}>{zipCodeErr}</div>
                                            }
                                        </div>
                                    </div>
                                    <div class="row form-group">
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
                                            <input type="text" id="companyTypeOther" value={this.state.companyType} className="form-control" onChange={this.onChangeCompanyType} name="company-type" style={{display:"none"}} placeholder='Please insert company type'></input>
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
                                    </div>
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
