import React, {useState, useEffect} from "react";

import "./Variation2.css" // Stylesheet

export default function CustomerDashboardViewProfileBillingPage(){

    const[firstName,setFirstName] = useState("");
    const[lastName,setlastName] = useState("");
    const[professionalTitle,setProfessionalTitle] = useState("");
    const[email,setEmail] = useState("");
    const[mobileNumber,setMobileNumber] = useState("");
    const[address,setAddress] = useState("");    

    function fetchAdminData(){
        fetch("/backend/customerDashboard/fetch/own/viewProfileBilling",
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
        document.getElementById("profTitle1").style.display = "block";
        document.getElementById("mobileNumber1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("address1").style.display = "block";
        document.getElementById("editButton0").style.display = "none";
        document.getElementById("updateButton0").style.display = "block";        
    }

    function customerUpdate(){
        let data0 = {
            firstName0: document.getElementById("firstName2").value,
            lastName0: document.getElementById("lastName2").value,
            profTitle0: document.getElementById("profTitle1").value,
            mobileNumber0: document.getElementById("mobileNumber1").value,
            email0: document.getElementById("email1").value,
            address0: document.getElementById("address1").value
        }
        console.log(data0);
        fetch("/backend/customerDashboard/edit/own/viewProfileBilling",
        {
          method: "POST", 
          'credentials': 'include',
          headers: {
            'Content-Type': 'application/json'            
          },            
          body: JSON.stringify(data0)
        }
      ).then((res)=>res.json()).then((data)=>{            
          console.log(data)
      });
        document.getElementById("firstName0").innerHTML = document.getElementById("firstName2").value;
        document.getElementById("lastName0").innerHTML = document.getElementById("lastName2").value;
        document.getElementById("profTitle0").innerHTML = document.getElementById("profTitle1").value;
        document.getElementById("mobileNumber0").innerHTML = document.getElementById("mobileNumber1").value;
        document.getElementById("email0").innerHTML = document.getElementById("email1").value;
        document.getElementById("address0").innerHTML = document.getElementById("address1").value;
        document.getElementById("firstName1").style.display = "none";
        document.getElementById("lastName1").style.display = "none";
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

    function customerEdit0() {                                  
        document.getElementById("paymentDivision001Name").style.display = "none";        
        document.getElementById("paymentDivision001").style.display = "none";  
        document.getElementById("paymentDivision001Expiry").style.display = "none";        
        document.getElementById("editButton1").style.display = "none";
        document.getElementById("paymentDivision00Select").style.display = "block";
        document.getElementById("paymentDivision00Name").style.display = "block";
        document.getElementById("paymentDivision00ExpiryDivision").style.display = "block";
        document.getElementById("updateButton1").style.display = "block";          
    }

    function customerUpdate0() {        
        document.getElementById("paymentDivision001").innerHTML = document.getElementById("paymentDivision00Select").value;        
        document.getElementById("paymentDivision001Name").innerHTML = document.getElementById("paymentDivision00Name").value;                        
        let expiry0 = document.getElementById("paymentDivision00ExpiryMonth").value;
        let expiry1 = document.getElementById("paymentDivision00ExpiryYear").value;
        let expiry2 = document.getElementById("paymentDivision00ExpiryCVV").value;
        let expiry3 = expiry0+"/"+expiry1+"/"+expiry2;
        document.getElementById("paymentDivision001Expiry").innerHTML = expiry3;
        document.getElementById("paymentDivision00Name").style.display = "none";
        document.getElementById("updateButton1").style.display = "none"; 
        document.getElementById("paymentDivision00Select").style.display = "none";        
        document.getElementById("paymentDivision00ExpiryDivision").style.display = "none";
        document.getElementById("paymentDivision001").style.display = "block";
        document.getElementById("paymentDivision001Name").style.display = "block"; 
        document.getElementById("paymentDivision001Expiry").style.display = "block";              
        document.getElementById("editButton1").style.display = "block";        
    }

    useEffect(()=>{
        fetchAdminData();
    })

    return (
        <div>
            <h1>Security</h1>
            <div className="profile_grid">
                <a className="profile_grid_item" href="#/dashboard/view-profile/contact">Contact</a>
                <a className="profile_grid_item" href="#/dashboard/view-profile/details">Details</a>
                <a className="profile_grid_item" href="#/dashboard/view-profile/security">Security</a>
                <a className="profile_grid_item" href="#/dashboard/view-profile/orders">Orders</a>
                <a className="profile_grid_item profile_grid_item_billing" href="#/dashboard/view-profile/billing">Billing</a>                                                               
            </div> 
            <div className="container ml-n3">
                <div className="col">
                    <div className="row">
                        <div className="col-2">
                            <img className="profile_image" alt="profile_image" width={120} height={120}></img>
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
            <hr/>            
            <div id="paymentDivision0">                
                <h5 className="paymentDivision00">
                    <p className="paymentDivision000">Payment Method</p>
                    <p id="paymentDivision001" className="paymentDivision001">Credit/Debit Card</p>
                    <select id="paymentDivision00Select">
                        <option disabled selected hidden>Payment Method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="debitCard">Debit Card</option>
                    </select>
                </h5>
                <h5 className="paymentDivision00">
                    <p className="paymentDivision000">Name on Card</p>
                    <p id="paymentDivision001Name" className="paymentDivision001">Full Name</p>
                    <input id="paymentDivision00Name"></input>
                </h5>
                <h5 className="paymentDivision00">
                    <p className="paymentDivision000">Expiry Date</p>
                    <p id="paymentDivision001Expiry" className="paymentDivision001">00/00/0000</p>
                    <div id="paymentDivision00ExpiryDivision">
                        <select id="paymentDivision00ExpiryMonth">
                            <option disabled selected hidden>MM</option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>                      
                        <select id="paymentDivision00ExpiryYear">
                            <option disabled selected hidden>YYYY</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>                      
                        <input id="paymentDivision00ExpiryCVV"></input> 
                    </div>                       
                </h5>                             
            </div>
            <div className="row">
                <div id="editButton1" className="col-2" onClick={customerEdit0}>          
                    <button className="btn btn-primary btn-lg">Edit</button>
                </div>
                <div id="updateButton1" className="col-2" onClick={customerUpdate0}>                          
                    <button className="btn btn-primary btn-lg">Update</button>  
                </div>
            </div>
        </div>
    )
}