import React from "react";

export default function ConfirmationPopup0(props){
    return(
        <div className="confirmationPopup d-none container w-50 h-25 bg-secondary position-absolute z-index-2 opacity-100" >
            <div className="d-flex flex-column mt-5 ml-5 position-relative text-white" style={{top:"13px"}}>
                <h1 className="confirmationPopup_h1"></h1>
                <div className="container d-flex flex-row mt-3 mr-2 position-relative" style={{right:"12px"}}>
                    <button title="sureButton_" id="sureButton" className="btn btn-primary btn-lg mr-2" onClick={props.sureButtonClick} ref={props.sureButtonRef0}>Sure</button>
                    <button title="cancelButton_" id="cancelButton" className="btn btn-primary btn-lg" onClick={props.cancelButtonClick}>Cancel</button>
                </div>
            </div>
        </div>
    )
}