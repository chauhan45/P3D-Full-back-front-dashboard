 import React from "react";

export default function ViewPopup0(props){
    return(
        <div id="viewPopup" className="viewPopup d-none container w-50 h-50 bg-secondary position-absolute" >
            <div className="d-flex flex-column position-relative text-white" style={{top:"13px"}}>
                <h2 className="viewPopup_h1 text-center mt-5 mb-4">View Panel</h2>
                <div className="container row">
                    <div className="container col-12 mt-5">
                        <label className="col-6">
                            <h5 className="">Full Name:</h5>
                            <h5 id="viewPopupFullName"></h5>
                        </label>
                        <label className="col-6">
                            <h5 className="">Mobile Number:</h5>
                            <h5 id="viewPopupMobileNumber"></h5>
                        </label>
                    </div>
                </div>
                <div className="container row">
                    <div className="container col-12 mt-5">
                        <label className="col-6">
                            <h5 className="">Email:</h5>
                            <h5 id="viewPopupEmail"></h5>
                        </label>
                        <label className="col-6">
                            <h5 className="">Address:</h5>
                            <h5 id="viewPopupAddress"></h5>
                        </label>
                    </div>
                </div>
                <div className="container row">
                    <div className="container col-12 mt-5">
                        <label className="col-6">
                            <h5 className="">Company Name:</h5>
                            <h5 id="viewPopupCompanyName"></h5>
                        </label>                        
                    </div>
                </div>                
                <div className="container d-flex flex-row mt-5 mr-2 position-relative justify-content-center" style={{right:"12px"}}>
                    <button id="okayButton" className="btn btn-primary btn-lg mr-2" onClick={props.okayButtonClick}>Okay</button>                    
                </div>
            </div>
        </div>
    )
}