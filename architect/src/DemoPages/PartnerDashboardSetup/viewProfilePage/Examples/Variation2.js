import React from "react";

import "./Variation2.css" // Stylesheet

export default function PartnerDashboardViewProfilePage(){
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
                <div className="column">
                    <div className="row">
                        <div className="col-2">
                            <img className="profile_image" alt="profile_image"></img>
                        </div>                    
                        <div className="col-4 column mt-4 ml-4 bg-white">
                            <h2 className="mt-2">First Name</h2>
                            <h2 className="">Last Name</h2>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4>Company</h4>
                        </div>
                        <div className="col-5">
                            <input className="form-control" placeholder="Company"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4>Phone</h4>
                        </div>
                        <div className="col-5">
                            <input className="form-control" placeholder="Phone"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4>Email</h4>
                        </div>
                        <div className="col-5">
                            <input className="form-control" placeholder="Email"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4>Address</h4>
                        </div>
                        <div className="col-5">
                            <input className="form-control" placeholder="Address"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4>City</h4>
                        </div>
                        <div className="col-5">
                            <input className="form-control" placeholder="City"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4>State</h4>
                        </div>
                        <div className="col-5 row">
                            <div className="col-3">
                                <select className="form-control">
                                    <option>Option1</option>
                                    <option>Option2</option>
                                </select>                                
                            </div>
                            <div className="col-4">
                                <input className="form-control" placeholder="Zip Code"></input>
                            </div>
                            <div className="col-4">
                                <input className="form-control" placeholder="00000"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4>Photo</h4>
                        </div>
                        <div className="col-5">
                            <input className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div className="column mt-4">
                    <div className="row">
                        <div className="col-2">
                            <button className="btn btn-primary pl-4 pr-4">Update</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}