import React, { useState, useEffect } from "react";

import "./Variation2.css" // Stylesheet

export default function CustomerDashboardViewProfileDetailsPage(){
    
    const[email,setEmail] = useState("");

    function fetchCustomerData(){        
        fetch("/backend/customerDashboard/fetch/own/viewProfileDetails",
          {
            method: "POST", 
            'credentials': 'include'            
          }
        ).then((res)=>res.json()).then((data)=>{                        
            setEmail(data.email);            
        });
    }

    function notificationsPreference(){        
        fetch("/backend/partnerDashboard/notificationPreference",
          {
            method: "POST", 
            'credentials': 'include',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                newProjectsNotify: document.getElementById("newProjectsNotify").checked,
                deletedProjectsNotify:document.getElementById("deletedProjectsNotify").checked,
                fileStatusChangeNotify:document.getElementById("fileStatusChangeNotify").checked,
                editNotify:document.getElementById("editNotify").checked,
                updateNotify:document.getElementById("updateNotify").checked
            })
          }          
        );
        alert("Notification preference updated");
    }

    function changeEmail0(){
        if(document.getElementById("block0_1_2_0_0").style.display==="inline-block"){ 
            document.getElementById("block0_1_1_0").style.display="none";
            document.getElementById("block0_1_1_1").value = document.getElementById("block0_1_1_0").innerHTML;
            document.getElementById("block0_1_1_1").style.display="block";          
            document.getElementById("block0_1_2_0_0").style.display="none";
            document.getElementById("block0_1_2_0_1").style.display="inline-block";
        }
        else if(document.getElementById("block0_1_2_0_1").style.display==="inline-block"){    
            document.getElementById("block0_1_1_1").style.display="none";
            document.getElementById("block0_1_1_0").innerHTML = document.getElementById("block0_1_1_1").value;        
            document.getElementById("block0_1_1_0").style.display="block";
            document.getElementById("block0_1_2_0_1").style.display="none";
            document.getElementById("block0_1_2_0_0").style.display="inline-block";
            let data0 = {                
                email0: document.getElementById("block0_1_1_1").value,                
            }            
            fetch("/backend/customerDashboard/edit/own/viewProfileDetails",
                {
                method: "POST", 
                'credentials': 'include',
                headers: {
                    'Content-Type': 'application/json'            
                },            
                body: JSON.stringify(data0)
                }
            )
        }
        else {
            return;         
        }
    }

    useEffect(()=>{
        fetchCustomerData();
    })

    return (
        <div>
            <h1>Details</h1>
            <div className="profile_grid">
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/contact">Contact</a>
                <a className="profile_grid_item profile_grid_item_details" href="#/dashboard/partner/view-profile/details">Details</a>
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/security">Security</a>
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/orders">Orders</a>
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/billing">Billing</a>                
            </div>   
            <br/>
            <div className="block0">
                <div className="block0_0">
                    <div className="block0_0_0">                        
                        <p className="block0_0_0_0">
                            <span>Email Notifications</span>                            
                        </p>                        
                    </div>
                    <div className="block0_0_1">
                        <p className="block0_0_1_0">
                            <span>
                                Select for which options and on what type of content
                                you would like to be emailed.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="block0_1">
                    <div className="block0_1_0">
                        <p className="block0_1_0_0">
                            <span>
                                Notification Email
                            </span>
                        </p>
                    </div>
                    <div className="block0_1_1">
                        <p className="block0_1_1_0">
                            <span id="block0_1_1_0">
                                {email}                                
                            </span>
                            <input id="block0_1_1_1" type="text"></input>
                        </p>                        
                    </div>
                    <div className="block0_1_2">
                        <p className="block0_1_2_0" onClick={changeEmail0}>
                            <span id="block0_1_2_0_0" style={{display:"inline-block"}}>
                                Change Email
                            </span>
                            <span id="block0_1_2_0_1" style={{display:"none"}}>
                                Done
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <hr/>                     
            <div className="block1">
                <div className="block1_0">
                    <p className="block1_0_0">
                        <span className="block1_0_0_0">
                            Select Notifications to Recieve
                        </span>
                    </p>                    
                </div>
                <div className="block1_1">
                    <p className="block1_1_0">
                        <span className="block1_1_0_0">
                            New Projects
                        </span>
                    </p>
                    <input id="newProjectsNotify" className="block1_1_1" type="checkbox"></input>
                </div>
                <div className="block1_2">
                    <p className="block1_2_0">
                        <span className="block1_2_0_0">
                            Deleted Projects
                        </span>
                    </p>
                    <input id="deletedProjectsNotify" className="block1_2_1" type="checkbox"></input>
                </div>
                <div className="block1_3">
                    <p className="block1_3_0">
                        <span className="block1_3_0_0">
                            File Status Change
                        </span>
                    </p>
                    <input id="fileStatusChangeNotify" className="block1_3_1" type="checkbox"></input>
                </div>
                <div className="block1_4">
                    <p className="block1_4_0">
                        <span className="block1_4_0_0">
                            Edit
                        </span>
                    </p>
                    <input id="editNotify" className="block1_4_1" type="checkbox"></input>
                </div>
                <div className="block1_5">
                    <p className="block1_5_0">
                        <span className="block1_5_0_0">
                            Updates
                        </span>
                    </p>
                    <input id="updateNotify" className="block1_5_1" type="checkbox"></input>
                </div>
                <div className="block1_6">
                    <button className="block1_6_0" onClick={notificationsPreference}>Update</button>                    
                </div>
            </div>                     
        </div>
    )
}