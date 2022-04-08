import React from "react";
import "./Variation2.css";

export default function AdminDashboardNewProjectInfoPage(){
    return (
        <>
            <h1>New Project</h1>
            <br/>
            <div className="profile_grid">
                <a className="profile_grid_item profile_grid_item_info" href="#/dashboard/new-project/info">Info</a>
                <a className="profile_grid_item profile_grid_item_details0" href="#/dashboard/new-project/details">Details</a>                
            </div> 
            <div>
                <div id="customerDashboardNewProjectInfoNewProjectName">
                    <h4 id="customerDashboardNewProjectInfoNewProjectNameh4">Project Name</h4>
                    <input/>
                </div>
                <hr />
                <div id="customerDashboardNewProjectInfoNewProjectAddress">
                    <h4 id="customerDashboardNewProjectInfoNewProjectAddressh4">Address</h4>
                    <input/>
                </div>
                <div id="customerDashboardNewProjectInfoNewProjectCity">
                    <h4 id="customerDashboardNewProjectInfoNewProjectCityh4">City</h4>
                    <input/>
                </div>
                <div id="customerDashboardNewProjectInfoNewProjectState">
                    <h4 id="customerDashboardNewProjectInfoNewProjectStateh4">State</h4>
                    <select>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div id="customerDashboardNewProjectInfoNewProjectZip">
                    <h4 id="customerDashboardNewProjectInfoNewProjectZiph4">Zip</h4>
                    <input/>
                </div>
                <div id="customerDashboardNewProjectInfoNewProjectButtons">
                    <a href="#/dashboard/partner/new-project/details">
                        <button id="customerDashboardNewProjectInfoNewProjectNext">
                            Next
                        </button>
                    </a>
                    <a href="#/dashboard/customer">
                        <button id="customerDashboardNewProjectInfoNewProjectCancel">
                            Cancel
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}