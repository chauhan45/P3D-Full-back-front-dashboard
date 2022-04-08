import React from "react";

import CountriesPhoneCodes from "../../../../component/countriesPhoneCodes";

import "./Variation2.css" // Stylesheet

export default function AdminDashboardViewProfileSecurityPage(){    
    function changePassword0(){
        if(document.getElementById("block0_1_2_0_0").style.display==="inline-block"&&document.getElementById("block0_1_2_0_1").style.display==="none"){            
            document.getElementById("block0_1_1_0_0").style.display="none";
            document.getElementById("block0_1_2_0_0").style.display="none";                        
            document.getElementById("block0_1_1_0_1").style.display="inline-block";            
            document.getElementById("block0_1_1_0_2").style.display="inline-block";            
            document.getElementById("block0_1_2_0_1").style.display="inline-block";
        }
        else if(document.getElementById("block0_1_2_0_1").style.display==="inline-block"&&document.getElementById("block0_1_2_0_0").style.display==="none"){            
            document.getElementById("block0_1_1_0_3").style.display = "none";
            if(document.getElementById("block0_1_1_0_1").value!==document.getElementById("block0_1_1_0_2").value){                
                document.getElementById("block0_1_1_0_3").style.display = "inline-block";
                return;                
            }
            document.getElementById("block0_1_1_0_1").style.display="none";
            document.getElementById("block0_1_2_0_1").style.display="none";                        
            document.getElementById("block0_1_1_0_2").style.display="none"; 
            document.getElementById("block0_1_1_0_0").style.display="inline-block";
            document.getElementById("block0_1_2_0_0").style.display="inline-block";                                    
            fetch("/backend/customerDashboard/edit/own/viewProfileSecurity/password",
                {
                    method: "POST", 
                    'credentials': 'include',
                    headers: {
                        'Content-Type': 'application/json'            
                },            
                    body: JSON.stringify({password0:document.getElementById("block0_1_1_0_1").value})
                }
            ).then((a)=>a.json()).then((a)=>console.log(a));
        }
        else {
            return;
        }
    }
    return (
        <div>
            <h1>Security</h1>
            <div className="profile_grid">
                <a className="profile_grid_item" href="#/dashboard/view-profile/contact">Contact</a>                
                <a className="profile_grid_item profile_grid_item_security" href="#/dashboard/view-profile/security">Security</a>                
            </div> 
            <br/>
            <div id="block0" className="block0">
                <div className="block0_0">
                    <div className="block0_0_0">                        
                        <p className="block0_0_0_0_auth">
                            <span>Authentication</span>                            
                        </p>                        
                    </div>                    
                </div>
                <div className="block0_1">
                    <div className="block0_1_0">
                        <p className="block0_1_0_0">
                            <span>
                                Current Password
                            </span>
                        </p>
                    </div>
                    <div className="block0_1_1">
                        <p className="block0_1_1_0">
                            <span id="block0_1_1_0_0">
                                **********
                            </span>                            
                            <span id="block0_1_1_0_3">Passwords dont match</span>
                            <input type="password" id="block0_1_1_0_1" placeholder="Password" />                            
                            <input type="password" id="block0_1_1_0_2" placeholder="Confirm Password"/>                            
                        </p>
                    </div>
                    <div className="block0_1_2">
                        <p id="block0_1_2_0" className="block0_1_2_0" onClick={changePassword0}>
                            <span id="block0_1_2_0_0" style={{display:"inline-block"}}>
                                Change Password
                            </span>
                            <span id="block0_1_2_0_1" style={{display:"none"}}>
                                Done
                            </span>
                        </p>
                    </div>                    
                </div>
            </div>
            <hr/> 
            <div id="block1" className="block0">
                <div className="block0_0">
                    <div className="block0_0_0">                        
                        <p id="block0_0_0_0_2">
                            <span>Two Step Verification</span>                            
                        </p>                        
                    </div>
                    <div className="block0_0_1">
                        <p className="block0_0_1_0">
                            <span>
                                It can help protect your account from
                                unauthorized access by requiring you to
                                enter an additional code when you sign in.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="block0_1">
                    <div className="block0_1_0">
                        <p id="block0_1_0_0" className="block0_1_0_0">
                            <span id="block0_1_0_0_0">
                                Set up
                            </span>                            
                        </p>       
                        <table id="table0">
                            <tr className="table0_0">
                                <th className="table0_0_0">Type</th>
                                <th className="table0_0_0">Status</th>
                                <th className="table0_0_0"></th>
                            </tr>
                            <tr className="table0_1">                
                                <td className="table0_1_0">SMS Text Message</td>
                                <td className="table0_1_0">
                                    <div id="table0_1_1_0"></div>
                                    Enabled
                                </td>
                                <td id="table0_1_2" className="table0_1_0">Remove</td>                
                            </tr>
                        </table>                                             
                    </div>                    
                </div>
                <div id="setUp2StepPopup0">
                    <h6 id="setUp2StepPopup0_0">Set Up 2-Step Verification</h6>
                    <p id="setUp2StepPopup0_1">Country</p>
                    <CountriesPhoneCodes id0="countryCodes0"/>
                    <p id="setUp2StepPopup0_2">Mobile Phone Number</p>
                    <input id="setUp2StepPopup0_3" type="text" placeholder="Enter a mobile phone number"/>
                    <div id="setUp2StepPopup0_div"> 
                        <button id="setUp2StepPopup0_4">Cancel</button>
                        <button id="setUp2StepPopup0_5">Continue</button>
                    </div>
                </div>                       
                <div id="setUp2StepPopup1">
                    <h6 id="setUp2StepPopup1_0">Set Up 2-Step Verification</h6>
                    <p id="setUp2StepPopup1_0_p"> 
                        A confirmation code was sent via text message to the phone number
                        you provided. Please enter the code below.
                    </p>
                    <p id="setUp2StepPopup1_1">Country</p>
                    <CountriesPhoneCodes id0="countryCodes1"/>
                    <p id="setUp2StepPopup1_2">Mobile Phone Number</p>
                    <input id="setUp2StepPopup1_3" type="text" placeholder="Enter a mobile phone number"/>
                    <div id="setUp2StepPopup1_div"> 
                        <button id="setUp2StepPopup1_4">Cancel</button>
                        <button id="setUp2StepPopup1_5">Continue</button>
                    </div>
                </div>                       
            </div>                        
        </div>
    )
}