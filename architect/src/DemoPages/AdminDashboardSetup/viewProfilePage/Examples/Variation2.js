import React, { useState, useEffect } from "react";

import "./Variation2.css" // Stylesheet

export default function AdminDashboardViewProfilePage(){

    const[firstName,setFirstName] = useState("");
    const[lastName,setlastName] = useState("");
    const[professionalTitle,setProfessionalTitle] = useState("");
    const[email,setEmail] = useState("");
    const[mobileNumber,setMobileNumber] = useState("");
    const[address,setAddress] = useState("");    

    function fetchAdminData(){
        fetch("/backend/admin/fetch/admin/viewProfile",
          {
            method: "POST", 
            'credentials': 'include'            
          }
        ).then((res)=>res.json()).then((data)=>{            
            setFirstName(data.firstName);
            setlastName(data.lastName);
            setProfessionalTitle(data.profTitle);
            setEmail(data.email);
            setMobileNumber(data.mobileNumber);
            setAddress(data.address);
        });
    }

    useEffect(()=>{
        fetchAdminData();
    })

    return (
        <div>
            <h1>View Profile</h1>
            <div className="profile_grid">
                <div className="profile_grid_item profile_grid_item_contact">Contact</div>
                <div className="profile_grid_item">Details</div>
                <div className="profile_grid_item">Security</div>
                <div className="profile_grid_item">Orders</div>
                <div className="profile_grid_item">Billing</div>
            </div>
            <div className="container ml-n3">
                <div className="col">
                    <div className="row">
                        <div className="col-2">
                            <div>
                                <img className="profile_image" alt="profile_image" width={120} height={120}></img>                                
                            </div>
                        </div>                               
                        <div className="col-3 bg-white mt-3 text-left">
                            <h2 className="mt-3">{firstName}</h2>                            
                            <h2 className="">{lastName}</h2>
                        </div>
                    </div>
                </div>                
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5>Professional Title:</h5>
                        </div>
                        <div className="col-5 text-left">
                            <h4>{professionalTitle}</h4>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5>Email:</h5>
                        </div>
                        <div className="col-5 text-left">
                            <h4>{email}</h4>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5>Mobile Number:</h5>
                        </div>
                        <div className="col-5 text-left">
                            <h4>{mobileNumber}</h4>
                        </div>
                    </div>
                </div>                
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5>Address:</h5>
                        </div>
                        <div className="col-5 text-left">
                            <h4>{address}</h4>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}