import React from "react";

import ReactTable from "react-table"; 
import 'react-table/react-table.css';

import "./Variation2.css" // Stylesheet

export default function CustomerDashboardViewProfileOrdersPage(){   
  const data0 = [
    {
      id0:"0",
      projectName0:"projectName0",
      city0:"city0",
      state0:"state0",
      customer0:"customer0",
      createdAt0:"createdAt0",
      download0:"download0",
      cost0:"cost0"
    }
  ] 
  const columns0 = [                 
    {
      Header: "Id",  
      accessor:"id0",
      Cell: (data1) => (<div className="cell0">{data1.value}</div>)
    },      
    {
      Header: "Project Name",
      accessor:"projectName0",
      Cell: (data1) => (<div className="cell0">{data1.value}</div>)
    },
    {
      Header: "City",
      accessor: 'city0',
      Cell: (data1) => (<div className="cell0">{data1.value}</div>)
    },
    {
      Header: "State",
      accessor: 'state0',
      Cell: (data1) => (<div className="cell0">{data1.value}</div>)
    },
    // {
    //   Header: "Customer",
    //   accessor: 'customer0',
    //   Cell: (data1) => (<div className="cell0">{data1.value}</div>)
    // },    
    {  
      Header: "Created Date",
      accessor: 'createdAt0',
      Cell: (data1) => (<div className="cell0">{data1.value}</div>)
    },     
    {  
      Header: "Download",
      accessor: 'download0',
      Cell: (data1) => 
        <select class="download_button_0">                                          
          <option value="" disabled selected hidden>Download</option>
          <option>Pdf</option>
          <option>Excel</option>
        </select>        
    },             
    {
      Header: "Cost",
      accessor: 'cost0',
      Cell: (data1) => (<div className="cell0">{data1.value}</div>)
    },             
]
    return (
        <div>
            <h1>Orders</h1>
            <div className="profile_grid">
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/contact">Contact</a>
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/details">Details</a>
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/security">Security</a>
                <a className="profile_grid_item profile_grid_item_orders" href="#/dashboard/partner/view-profile/orders">Orders</a>
                <a className="profile_grid_item" href="#/dashboard/partner/view-profile/billing">Billing</a>                                               
            </div>
            <br/>
            <ReactTable data={data0} columns={columns0} /> 
        </div>
    )
}