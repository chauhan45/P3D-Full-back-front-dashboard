import React from "react";
import "./Variation2.css"

export default function PartnerDashboardNewProjectDetailsPage(){
    return (
        <>
            <h1>New Project</h1>
            <br/>
            <div className="profile_grid">
                <a className="profile_grid_item" href="#/dashboard/partner/new-project/info">Info</a>
                <a id="profile_grid_item_details0" className="profile_grid_item" href="#/dashboard/new-project/details">Details</a>                
            </div> 
            <br/>
            <div>
                <div className="newProjectDetailsFirstDivision">
                    <h4 className="newProjectDetailsFirstDivisionSpanHeading0">1. What is the type of this Project?</h4>
                    <div className="newProjectDetailsFirstDivision0 newProjectDetailsFirstDivision01">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Residential</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Commercial</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Industrial</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Error</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Default</span>
                    </div>
                </div>                
                <div className="newProjectDetailsFirstDivision newProjectDetailsFirstDivision1">
                    <h4 className="newProjectDetailsFirstDivisionSpanHeading0">2. What is the labor type for this Project?</h4>
                    <div className="newProjectDetailsFirstDivision0 newProjectDetailsFirstDivision01">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Standard Union</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Non Union</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Residential</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Feferal</span>
                    </div>
                    <div className="newProjectDetailsFirstDivision0">
                        <input type="radio"/><span className="newProjectDetailsFirstDivisionSpan">Higher Education</span>
                    </div>
                </div>    
                <div className="newProjectDetailsFirstDivision2">
                    <h4 className="newProjectDetailsFirstDivision2Heading">Project File*</h4>
                    <div className="newProjectDetailsFirstDivision2Division">
                        <input className="newProjectDetailsFirstDivision2DivisionInput" type="file"/>
                        <p className="newProjectDetailsFirstDivision2DivisionParagraph">Click or Drag a Revit .RVT or AutoCAD .DMG file to this area to upload</p>
                    </div>
                </div>
                <div className="newProjectDetailsThirdDivision">
                    <button className="newProjectDetailsThirdDivisionSaveButton">
                        Save
                    </button>
                    <button className="newProjectDetailsThirdDivisionCancelButton">
                        Cancel
                    </button>
                </div>            
            </div>
        </>
    )
}