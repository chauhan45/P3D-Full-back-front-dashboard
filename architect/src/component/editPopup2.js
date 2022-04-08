import React from "react";

export default function EditPopup1(props){
    return(
        <div id="editCustomerPopup" className="editPopup d-none container w-50 bg-secondary position-absolute" >
            <div className="d-flex flex-column position-relative text-white" style={{top:"13px"}}>
                <h2 className="editPopup_h1 text-center mt-4 mb-4">Edit Panel</h2>
                <div className="container row">
                    <div className="container col-12 mt-2">
                        <label className="col-6">
                            <h5 className="">First Name</h5>
                            <input id="firstNameInput" className="form-control w-100" type="text" value={props.fullName}/>
                            <span id="firstNameError" style={{display:"none"}}>First name is required</span>
                        </label> 
                        <label className="col-6">
                            <h5 className="">Last Name</h5>
                            <input id="lastNameInput" className="form-control w-100" type="text" value={props.fullName}/>
                            <span id="lastNameError" style={{display:"none"}}>Last name is required</span>
                        </label>                        
                    </div>
                </div>
                <div className="container row">
                    <div className="container col-12 mt-2">
                        <label className="col-6">
                            <h5 className="">Email</h5>
                            <input id="emailInput" className="form-control w-100" type="text" value={props.email}/>                                                    
                            <span id="emailError" style={{display:"none"}}>Email is required</span>
                        </label>                                   
                        <label className="col-6">
                            <h5 className="">Mobile Number</h5>
                            <input id="mobileNumberInput" className="form-control w-100" type="text" value={props.mobileNumber}/>
                            <span id="mobileNumberError" style={{display:"none"}}>Mobile number is required</span>
                        </label>                                     
                    </div>
                </div>                
                <div className="container row">
                    <div className="container col-12 mt-2">
                        <label className="col-6">
                            <h5 className="">Company Name</h5>
                            <input id="companyNameInput" className="form-control w-100" type="text" /> 
                            <span id="companyNameError" style={{display:"none"}}>Company name is required</span>                              
                        </label>                        
                    </div>
                </div>                                                                                                                                                                              
                <div className="container row">
                    <div className="container col-12 mt-2">
                        <label className="col-6">
                            <h5 className="">Street Address</h5>
                            <input id="streetAddressInput" className="form-control w-100" type="text" /> 
                            <span id="streetAddressError" style={{display:"none"}}>Street address is required</span>                              
                        </label>                        
                        <label className="col-6">
                            <h5 className="">City</h5>
                            <input id="cityInput" className="form-control w-100" type="text" /> 
                            <span id="cityError" style={{display:"none"}}>City is required</span>                              
                        </label>                        
                    </div>
                </div>                                                                                                                                                                              
                <div className="container row">
                    <div className="container col-12 mt-2">
                        <label className="col-6">
                            <h5 className="">State</h5>
                            <input id="stateInput" className="form-control w-100" type="text" /> 
                            <span id="stateError" style={{display:"none"}}>State is required</span>                              
                        </label>                        
                        <label className="col-6">
                            <h5 className="">Zip Code</h5>
                            <input id="zipCodeInput" className="form-control w-100" type="text" /> 
                            <span id="zipCodeError" style={{display:"none"}}>Zip code is required</span>                              
                        </label>                        
                    </div>
                </div>                                                                                                                                                                              
                <div className="container row">
                    <div className="container col-12 mt-2">
                        <label className="col-6">
                            <label class="form-label" for="company-type">
                                Company Type
                            </label>
                            <select type="text" id="companyTypeInput" name="company-type"
                                className="form-control">
                                <option value="0" disabled selected hidden>
                                    Select..
                                </option>
                                <option value="General Contractor">
                                    General Contractor
                                </option>
                                <option value="Sub Contractor">Sub Contractor</option>
                                <option value="Architect">Architect</option>
                                <option value="Design firm">Design firm</option>                                
                            </select>
                            <span id="companyTypeError" style={{display:"none"}}>Company type is required</span>                              
                        </label>                                                
                        <label className="col-6">
                            <label class="form-label" for="industry-type">
                                Industry Type
                            </label>
                            <select type="text" id="industryTypeInput" name="industry-type"
                                className="form-control">
                                <option value="0" disabled selected hidden>
                                    Select..
                                </option>
                                <option value="Residential">Residential</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Municipal">Municipal</option>                                
                            </select>
                            <span id="industryTypeError" style={{display:"none"}}>Industry type is required</span>                              
                        </label>                        
                    </div>
                </div>                                                                                                                                                                              
                <div className="container d-flex flex-row mt-5 mr-2 position-relative justify-content-center" style={{right:"12px"}}>
                    <button id="sureEditButton_" className="btn btn-primary btn-lg mr-2" onClick={props.sureButtonClick} ref={props.sureButtonRef1}>Sure</button>
                    <button id="cancelEditButton_" className="btn btn-primary btn-lg" onClick={props.cancelButtonClick} >Cancel</button>
                </div>
            </div>
        </div>
    )
}