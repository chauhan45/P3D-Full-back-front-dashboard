import React from "react";
import "./Variation2.css"

export default function CustomerDashboardNewProjectDetailsPage(){
    return (
        <>
            <h1>New Project</h1>
            <br/>
            <div className="profile_grid">
                <a className="profile_grid_item" href="#/dashboard/new-project/info">Info</a>
                <a id="profile_grid_item_details0" className="profile_grid_item" href="#/dashboard/new-project/details">Details</a>                
            </div> 
            <div>
                <div>
                    <h4>Details</h4>
                    <input/>
                </div>                
            </div>
        </>
    )
}