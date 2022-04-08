import React from "react";

export default function EditPopup0(props){
    return(
        <div id="editPopup" className="editPopup d-none container w-50 h-50 bg-secondary position-absolute">
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
                            <h5 className="">Mobile Number</h5>
                            <input id="mobileNumberInput" className="form-control w-100" type="text" value={props.mobileNumber}/>
                            <span id="mobileNumberError" style={{display:"none"}}>Mobile number is required</span>
                        </label>
                        <label className="col-6">
                            <h5 className="">Email</h5>
                            <input id="emailInput" className="form-control w-100" type="text" value={props.email}/>                                                    
                            <span id="emailError" style={{display:"none"}}>Email is required</span>
                        </label>                        
                    </div>
                </div>
                <div className="container row">
                    <div className="container col-12 mt-2">
                        <label className="col-6">
                            <h5 className="">Password</h5>
                            <input id="passwordInput" className="form-control w-100" type="text" /> 
                            <span id="passwordError" style={{display:"none"}}>Password is required</span>  
                            <span id="passwordMatchError" style={{display:"none"}}>Passwords dont match</span>                       
                        </label>
                        <label className="col-6">
                            <h5 className="">Confirm Password</h5>
                            <input id="confirmPasswordInput" className="form-control w-100" type="text"/>                        
                            <span id="confirmPasswordError" style={{display:"none"}}>Confirm password is required</span>                       
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