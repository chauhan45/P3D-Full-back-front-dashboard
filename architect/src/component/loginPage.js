import React, { Component } from "react"; // React
import ReactDOM from "react-dom"; // ReactDOM
import { HashRouter } from "react-router-dom"; // Router

import "../polyfills";
import * as serviceWorker from "../serviceWorker";

import AdminDashboard from "../DemoPages/adminDashboard"; // Admin Dashboard
import CustomerDashboard from "../DemoPages/customerDashboard"; // Customer Dashboard
import PartnerDashboard from "../DemoPages/partnerDashboard"; // Partner Dashboard

import configureStore from "../config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

const rootElement = document.getElementById("root"); // Root Element

const renderApp = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>                            
                <Component />            
            </HashRouter> 
        </Provider>,
        rootElement
    );
};

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: '',
            formErrors: {},
            emailError: false,
            passwordError: false,
            adminArchived: false,
            partnerAdminApproved:false,
            partnerEmailConfirmed:false,
            partnerArchived: false,
            customerAdminApproved:false,
            customerEmailConfirmed:false,
            customerArchived: false,                                            
        };
        this.initialState = this.state;
       
        this.emailOnChange = this.emailOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.userTypeHandleChange = this.userTypeHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }    
    handleFormValidation() {
        const { email , password } = this.state;
        let formErrors = {};
        let formIsValid = true;
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Email id is required.";
        }
        
        if (!password) {
            formIsValid = false;
            formErrors["passwordErr"] = "password  is required.";
        }
        this.setState({ formErrors: formErrors });
        return formIsValid;
    }
   
    onSubmit(e){
        e.preventDefault();
        this.setState({
            emailError: true,
            passwordError: true,
            adminArchived: true,
            partnerAdminApproved:true,
            partnerEmailConfirmed:true,
            partnerArchived: true,
            customerAdminApproved:true,
            customerEmailConfirmed:true,
            customerArchived: true,                                             
        })
        if (this.handleFormValidation()) {
           this.setState(this.initialState)
            const data = {
                email: this.state.email,
                password: this.state.password,                
            };
            fetch('/backend/architect_dashboard/login',
                {   method: "POST", 
                    'credentials': 'include',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }                    
                }
            ).then((response)=>response.text()).then((data0)=>{
                if(data0){                  
                    if(data0==="email_false"){
                        this.setState({emailError:true});
                    }
                    else if(data0==="password_false"){
                        this.setState({passwordError:true});
                    }
                    else if(data0==="admin_archived"){
                        this.setState({adminArchived:true});
                    }
                    else if(data0==="partner_admin_not_approved"){                    
                        this.setState({partnerAdminApproved:true});
                    }
                    else if(data0==="partner_email_not_confirmed"){
                        this.setState({partnerEmailConfirmed:true});
                    }
                    else if(data0==="partner_archived"){
                        this.setState({partnerArchived:true});
                    }
                    else if(data0==="customer_admin_not_approved"){
                        this.setState({customerAdminApproved:true});
                    }
                    else if(data0==="customer_email_not_confirmed"){
                        this.setState({customerEmailConfirmed:true});
                    }
                    else if(data0==="customer_archived"){
                        this.setState({customerArchived:true});
                    }
                    else if(data0==="admin_true"){                                                                                             
                        renderApp(AdminDashboard);                  

                        if (module.hot) {
                            module.hot.accept("../DemoPages/adminDashboard", () => {
                                const NextApp = require("../DemoPages/adminDashboard").default;    
                                renderApp(NextApp);
                            });
                        } 
                        serviceWorker.unregister();                  
                    }
                    else if(data0==="partner_true"){                        
                        renderApp(PartnerDashboard);                  

                        if (module.hot) {
                            module.hot.accept("../DemoPages/partnerDashboard", () => {
                                const NextApp = require("../DemoPages/partnerDashboard").default;    
                                renderApp(NextApp);
                            });
                        } 
                        serviceWorker.unregister();   
                    }
                    else if(data0==="customer_true"){                        
                        renderApp(CustomerDashboard);                  

                        if (module.hot) {
                            module.hot.accept("../DemoPages/customerDashboard", () => {
                                const NextApp = require("../DemoPages/customerDashboard").default;    
                                renderApp(NextApp);
                            });
                        } 
                        serviceWorker.unregister();   
                    }                    
                }
                else{
                    return;
                }
            });
        }
    }                       

    emailOnChange(e){
        this.setState( { email: e.target.value } );
    }

    passwordOnChange(e){
        this.setState( { password: e.target.value } );
    }

    userTypeHandleChange(e){
        this.setState( { userType: e.target.value } );
    }

    render() {
        const { emailErr , passwordErr} = this.state.formErrors;        
        return (
            <>                
                <section class="section-border border-primary size-login">
                    <div class="container d-flex flex-column">
                        <div class="row align-items-center justify-content-center gx-0 min-vh-100 ">
                            <div class="col-12 col-md-5 col-lg-4 py-8 py-md-11 size11">
                                <h2 class="mb-4 fw-bold text-center">
                                    P3D Dashboard                                   
                                </h2>
                                <br/>
                                <p class="mb-6 text-center text-muted">                                    
                                </p>
                                <form class="mb-6" onSubmit={this.onSubmit}>
                                    <div class="form-group ">
                                        <label class="form-label" for="email">
                                            Email Address
                                        </label>
                                        <input type="email"  id="email" placeholder="name@address.com" onChange={this.emailOnChange} value={this.state.email} 
                                            className="form-control  {emailErr ? ' showError' : ''}" />
                                                {emailErr && <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>}
                                                {this.state.emailError && <div style={{ color: "red", paddingBottom: 10 }}>Email id is not present in P3D</div>}
                                    </div>
                                    <div class="form-group mb-5 ">
                                        <label class="form-label" for="password">
                                            Password
                                        </label>
                                        <input type="password"  id="password" placeholder="Enter your password" onChange={this.passwordOnChange} value={this.state.password} 
                                               className="form-control  {passwordErr ? ' showError' : ''}" />
                                            {passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>}
                                            {this.state.passwordError && <div style={{ color: "red", paddingBottom: 10 }}>Password is incorrect</div>}
                                            {this.state.adminArchived && <div style={{ color: "red", paddingBottom: 10 }}>Archived</div>}
                                            {this.state.partnerAdminApproved && <div style={{ color: "red", paddingBottom: 10 }}>Not Approved</div>}
                                            {this.state.partnerEmailConfirmed && <div style={{ color: "red", paddingBottom: 10 }}>Email not confirmed</div>}
                                            {this.state.partnerArchived && <div style={{ color: "red", paddingBottom: 10 }}>Archived</div>}
                                            {this.state.customerAdminApproved && <div style={{ color: "red", paddingBottom: 10 }}>Not Approved</div>}
                                            {this.state.customerEmailConfirmed && <div style={{ color: "red", paddingBottom: 10 }}>Email not confirmed</div>}
                                            {this.state.customerArchived && <div style={{ color: "red", paddingBottom: 10 }}>Archived</div>}
                                    </div>     
                                    {/* <div class="form-group mb-5 ">
                                        <label class="form-label" for="userType">
                                            User Type
                                        </label>
                                        <select id="userType" placeholder="Select User Type" value={this.state.userType} 
                                               onChange={this.userTypeHandleChange} className="form-control" >
                                            <option value="admin">Admin</option>
                                            <option value="partner">Partner</option>
                                            <option value="customer">Customer</option>
                                        </select>                                        
                                    </div>                                                  */}
                                    <button class="btn w-100 btn-primary form-rounded" onClick={this.login} onSubmit={this.handleSubmit} type="submit">
                                        Sign in
                                    </button>
                                    
                                    <hr></hr>
                                </form>
                                {/* <p class="mb-0 fs-sm text-center text-muted">                                    
                                    <button  class="btn w-100 btn-primary form-rounded" onClick={this.props.onForgotPassword}>Forgot your password? </button>
                                </p> */}
                            </div>
                        </div> 
                    </div> 
                </section>
            </>
        )
    }
}