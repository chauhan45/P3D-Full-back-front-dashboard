import React, { useState, useEffect } from "react";

import "./Variation2.css" // Stylesheet

export default function AdminDashboardViewProfileContactPage(){

    const[firstName,setFirstName] = useState("");
    const[lastName,setlastName] = useState("");
    const[professionalTitle,setProfessionalTitle] = useState("");
    const[email,setEmail] = useState("");
    const[mobileNumber,setMobileNumber] = useState("");
    const[address,setAddress] = useState(""); 
    const[imageSrc0, setImageSrc0] = useState(null);   

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
            setImageSrc0(require("./../../assets/profilePictures/"+data.profileImage));
        });
    }

    function customerEdit(){
        document.getElementById("firstName2").value = document.getElementById("firstName0").innerHTML;
        document.getElementById("lastName2").value = document.getElementById("lastName0").innerHTML;
        document.getElementById("profTitle1").value = document.getElementById("profTitle0").innerHTML;
        document.getElementById("mobileNumber1").value = document.getElementById("mobileNumber0").innerHTML;
        document.getElementById("email1").value = document.getElementById("email0").innerHTML;
        document.getElementById("address1").value = document.getElementById("address0").innerHTML;
        document.getElementById("firstName0").style.display = "none";
        document.getElementById("lastName0").style.display = "none";
        document.getElementById("profTitle0").style.display = "none";
        document.getElementById("mobileNumber0").style.display = "none";
        document.getElementById("email0").style.display = "none";
        document.getElementById("address0").style.display = "none";        
        document.getElementById("firstName1").style.display = "block";
        document.getElementById("lastName1").style.display = "block";
        document.getElementById("adminDashboardViewProfileContactPicture").style.display = "block";  
        document.getElementById("profTitle1").style.display = "block";
        document.getElementById("mobileNumber1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("address1").style.display = "block";
        document.getElementById("editButton0").style.display = "none";
        document.getElementById("updateButton0").style.display = "block";  
              
    }

    function profileImageChange(e){                
        
    }

    function customerUpdate(){
        // setImageSrc0(URL.createObjectURL(document.getElementById('adminDashboardViewProfileContactPictureInput').files[0]));
        let data0 = {
            firstName0: document.getElementById("firstName2").value,
            lastName0: document.getElementById("lastName2").value,
            profTitle0: document.getElementById("profTitle1").value,
            mobileNumber0: document.getElementById("mobileNumber1").value,
            email0: document.getElementById("email1").value,
            address0: document.getElementById("address1").value
        }         
        let file0 = new FormData();
        file0.append("profilePicture0",document.getElementById('adminDashboardViewProfileContactPictureInput').files[0]);
        fetch("/backend/customerDashboard/edit/own/viewProfileContactProfilePicture",
            {
                method: "POST", 
                'credentials': 'include',                
                body: file0
            }
        ).then((data0)=>data0.text()).then((data1)=>{  
            console.log(data1);                                                                 
        });
        fetch("/backend/customerDashboard/edit/own/viewProfileContact",
            {
            method: "POST", 
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json'            
            },            
            body: JSON.stringify(data0)
            }
        )
        document.getElementById("firstName0").innerHTML = document.getElementById("firstName2").value;
        document.getElementById("lastName0").innerHTML = document.getElementById("lastName2").value;
        document.getElementById("profTitle0").innerHTML = document.getElementById("profTitle1").value;
        document.getElementById("mobileNumber0").innerHTML = document.getElementById("mobileNumber1").value;
        document.getElementById("email0").innerHTML = document.getElementById("email1").value;
        document.getElementById("address0").innerHTML = document.getElementById("address1").value;
        document.getElementById("firstName1").style.display = "none";
        document.getElementById("lastName1").style.display = "none";
        document.getElementById("adminDashboardViewProfileContactPicture").style.display = "none";  
        document.getElementById("profTitle1").style.display = "none";
        document.getElementById("mobileNumber1").style.display = "none";
        document.getElementById("email1").style.display = "none";
        document.getElementById("address1").style.display = "none";
        document.getElementById("firstName0").style.display = "block";
        document.getElementById("lastName0").style.display = "block";
        document.getElementById("profTitle0").style.display = "block";
        document.getElementById("mobileNumber0").style.display = "block";
        document.getElementById("email0").style.display = "block";
        document.getElementById("address0").style.display = "block";
        document.getElementById("editButton0").style.display = "block";
        document.getElementById("updateButton0").style.display = "none";        
    }

    useEffect(()=>{
        fetchAdminData();
    })

    return (
        <div>
            <h1>View Profile</h1>
            <div className="profile_grid">
                <a className="profile_grid_item_contact profile_grid_item" href="#/dashboard/view-profile/contact">Contact</a>                
                <a className="profile_grid_item" href="#/dashboard/view-profile/security">Security</a>                
            </div>
            <div className="container ml-n3">
                <div className="col">
                    <div className="row">
                        <div className="col-2">
                            <img id="adminDashboardViewProfileContactPictureHtml" className="profile_image" alt="profile_image" width={120} height={120} src={imageSrc0}></img>
                        </div>                               
                        <div className="col-3 bg-white mt-3 text-left">
                            <h2 id="firstName0" className="mt-3">{firstName}</h2>
                            <div id="firstName1" className="container mt-4">
                                <input id="firstName2" type="text"></input>
                            </div>
                            <h2 id="lastName0">{lastName}</h2>
                            <div id="lastName1" className="container mt-2">
                                <input id="lastName2" type="text"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column mt-4" id="adminDashboardViewProfileContactPicture">
                    <div className="row">
                        <div className="col-3">
                            <h5>Profile Image</h5>
                        </div>
                        <div className="col-5 text-left">
                            <input onChange={profileImageChange} id="adminDashboardViewProfileContactPictureInput" type="file" accept="image/png, image/jpeg, image/jpg"/>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5>Professional Title:</h5>
                        </div>
                        <div className="col-5 text-left">
                            <h4 id="profTitle0" className="">{professionalTitle}</h4>
                            <input id="profTitle1" type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5>Email:</h5>
                        </div>
                        <div className="col-5 text-left">
                            <h4 id="email0" className="">{email}</h4>
                            <input id="email1" type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5 className="">Mobile Number:</h5>                            
                        </div>
                        <div className="col-5 text-left">
                            <h4 id="mobileNumber0" className="">{mobileNumber}</h4>
                            <input id="mobileNumber1" type="text"></input>
                        </div>
                    </div>
                </div>                
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-3">
                            <h5>Address:</h5>
                        </div>
                        <div className="col-5 text-left">
                            <h4 id="address0" className="">{address}</h4>
                            <input id="address1" type="text"></input>
                        </div>
                    </div>
                </div>                
                <div className="column mt-4">
                    <div className="row">
                        <div id="editButton0" className="col-2" onClick={customerEdit}>          
                            <button className="btn btn-primary btn-lg">Edit</button>
                        </div>
                        <div id="updateButton0" className="col-2" onClick={customerUpdate}>                          
                            <button className="btn btn-primary btn-lg">Update</button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}