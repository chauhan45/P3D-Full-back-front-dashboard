import React, { Component} from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css';
import './Variation2.css';
import $ from "jquery";
import ConfirmationPopup0 from '../../../../component/confirmationPopup0';
import EditPopup0 from '../../../../component/editPopup0';
import ViewPopup0 from '../../../../component/viewPopup0';

export default class AdminDashboardAllArchivedCustomers extends Component {  
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true,          
      allArchivedCustomersSearchInput:"",
      allArchivedCustomersSearchFieldEmptyError: false,
      allArchivedCustomersSearchNotFoundError: false,           
    }        
    this.sureButtonRef0 = React.createRef();
    this.sureButtonRef1 = React.createRef();
    this.getUsersData = this.getUsersData.bind(this);    
    this.createdAtDate = this.createdAtDate.bind(this);
    this.createdAtTime = this.createdAtTime.bind(this);    
    this.adminApproved = this.adminApproved.bind(this);
    this.editCustomer0 = this.editCustomer0.bind(this);    
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.sureButton = this.sureButton.bind(this);
    this.cancelButton = this.cancelButton.bind(this);  
    this.viewAdmin = this.viewAdmin.bind(this); 
    this.okayButton = this.okayButton.bind(this);
    this.allArchivedCustomersSearch = this.allArchivedCustomersSearch.bind(this);
    this.allArchivedCustomersSearchInputChange = this.allArchivedCustomersSearchInputChange.bind(this);
  }
  async getUsersData(){    
    const res = await axios.post("/admin/fetch/customers/archived")                           
    this.setState({loading:false, users: res.data});    
    // axios.post("/fetch/user").then(res0=>{
    //   for(let key0 in res0.data){  
    //     if(res0.data[key0]["admin_approved"]===true){
    //       $("#admin_approved_"+res0.data[key0]["_id"]).attr("checked",true);
    //     }
    //     if(res0.data[key0]["is_deleted"]===true){
    //       $("#is_deleted_"+res0.data[key0]["_id"]).attr("checked",true);
    //     }
    //   }
    // })    
  }
  createdAtDate(time){
    let time0 = time;
    let time1 = time0.split("T"); 
    let time2 = time1[0];   
    return time2;
  }   
  createdAtTime(time){
    let time0 = time;        
    let time1 = new Date(time0)
    let time2 = time1.getUTCHours();
    let time3 = time1.getUTCMinutes()
    if(time2>=12){
      return time2%12+":"+time3+" PM";
    }else{
      return time2+":"+time3+" PM";
    }
  }  
  adminApproved(id0){                     
    $(".confirmationPopup").attr("style","top:17%;left:31%;z-index:1;display:block !important");
    let firstName = $("#admin_approved_"+id0).attr("class").split("_")[3];
    let lastName = $("#admin_approved_"+id0).attr("class").split("_")[4];
    $(".confirmationPopup_h1").text(`Are you sure you want to approve ${firstName} ${lastName}`);            
    $("#sureButton_").attr("id","sureApprovalButton_"+id0);
    $("#cancelButton_").attr("id","cancelApprovalButton_"+id0);    
    document.getElementById("admin_approved_"+id0).checked = false;    
  } 
  sureButton(){    
    let id0 = this.sureButtonRef0.current.id.split("_")[1];
    let id1 = this.sureButtonRef1.current.id.split("_")[1];    
    let data0 = {id:id0};         
    if(this.sureButtonRef0.current.id.split("_")[0]==="sureApprovalButton"){
      axios.post("/backend/admin-approval-request",data0)
            .then(result=>console.log(result))
            .catch(error=>console.log(error));     
      document.getElementById("admin_approved_"+id0).checked = true;
      $("#admin_approved_"+id0).attr("disabled",true);
      $(".confirmationPopup").css("display","none");
    }
    else if(this.sureButtonRef0.current.id.split("_")[0]==="sureDeleteButton"){
      fetch('/backend/admin/edit/admin/unarchive',
        {   method: "POST", 
            'credentials': 'include',
            body: JSON.stringify(data0),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }                                
        }        
      ).then((result)=>result.text()).then((result)=>console.log(result));
      $(".confirmationPopup").css("display","none");
    }  
    else if(this.sureButtonRef1.current.id.split("_")[0]==="sureEditButton"){
      axios.post("/backend/admin-edit-customer",
      {id:id1/*,user_type:$("#user_type_input_"+_id).val()*/,full_name:$("#fullNameInput").val(),mobile_number:$("#mobileNumberInput").val(),email:$("#emailInput").val(), address:$("#addressInput").val(), company_name:$("#companyNameInput").val()/*,company_type:$("#companyTypeInput").val(),industry_type:$("#industryTypeInput").val()*/});         
    // $("#user_type_input_"+_id).hide();$("#user_type_field_"+_id).show();$("#user_type_field_"+_id).text($("#user_type_input_"+_id).val());
      $(`#full_name_field_${id1}`).text($("#fullNameInput").val());
      $(`#mobile_number_field_${id1}`).text($("#mobileNumberInput").val());
      $(`#email_field_${id1}`).text($("#emailInput").val());
      $(`#address_field_${id1}`).text($("#addressInput").val());
      $(`#company_name_field_${id1}`).text($("#companyNameInput").val());
      // $(`#company_type_field_${id1}`).text($("#companyTypeInput").val());
      // $(`#industry_type_field_${id1}`).text($("#industryTypeInput").val());
      $("#editPopup").css("display","none");
    }
    else{
      return;
    }             
  }
  cancelButton(){
    if($(".confirmationPopup")){
      $(".confirmationPopup").css("display","none");
    }
    if($("#editPopup")){
      $("#editPopup").css("display","none");    
    }
    else{
      return; 
    }
  } 
  editCustomer0(id){
    $("#editPopup").attr("style","display:block !important;left:475px;z-index:1;");     
    let customer0 = $(`#edit_button0_${id}`).attr("title").split("_");    
    $("#fullNameInput").val(customer0[2]+" "+customer0[3]);
    $("#mobileNumberInput").val(customer0[4]);
    $("#emailInput").val(customer0[5]);
    $("#addressInput").val(customer0[6]);
    $("#companyNameInput").val(customer0[7]);
    // $("#companyTypeInput").val(customer0[8]);
    // $("#industryTypeInput").val(customer0[9]);
    $("#sureEditButton_").attr("id",`sureEditButton_${id}`);
    $("#cancelEditButton_").attr("id",`cancelEditButton_${id}`);    
    // $("#user_type_field_"+id).hide();$("#user_type_input_"+id).show();$("#user_type_input_"+id).val($("#user_type_field_"+id).text());        
    // $("#full_name_field_"+id).hide();$("#full_name_input_"+id).show();$("#full_name_input_"+id).val($("#full_name_field_"+id).text());        
    // $("#mobile_number_field_"+id).hide();$("#mobile_number_input_"+id).show();$("#mobile_number_input_"+id).val($("#mobile_number_field_"+id).text());        
    // $("#email_field_"+id).hide();$("#email_input_"+id).show();$("#email_input_"+id).val($("#email_field_"+id).text());        
    // $("#company_name_field_"+id).hide();$("#company_name_input_"+id).show();$("#company_name_input_"+id).val($("#company_name_field_"+id).text())        
    // $("#company_type_field_"+id).hide();$("#company_type_input_"+id).show();$("#company_type_input_"+id).val($("#company_type_field_"+id).text())
    // $("#industry_type_field_"+id).hide();$("#industry_type_input_"+id).show();$("#industry_type_input_"+id).val($("#industry_type_field_"+id).text())        
    // $("#address_field_"+id).hide();$("#address_input_"+id).show();$("#address_input_"+id).val($("#address_field_"+id).text())        
    // $("#edit_button0_"+id).hide();$("#edit_button1_"+id).show();    
  }
  // editCustomer1(_id){        
  //   axios.post("/backend/admin-edit-customer",
  //     {id:_id/*,user_type:$("#user_type_input_"+_id).val()*/,full_name:$("#full_name_input_"+_id).val(),mobile_number:$("#mobile_number_input_"+_id).val(),email:$("#email_input_"+_id).val(), address:$("#address_input_"+_id).val(), company_name:$("#company_name_input_"+_id).val(),company_type:$("#company_type_input_"+_id).val(),industry_type:$("#industry_type_input_"+_id).val()});         
  //   // $("#user_type_input_"+_id).hide();$("#user_type_field_"+_id).show();$("#user_type_field_"+_id).text($("#user_type_input_"+_id).val());
  //   $("#full_name_input_"+_id).hide();$("#full_name_field_"+_id).show();$("#full_name_field_"+_id).text($("#full_name_input_"+_id).val());
  //   $("#mobile_number_input_"+_id).hide();$("#mobile_number_field_"+_id).show();$("#mobile_number_field_"+_id).text($("#mobile_number_input_"+_id).val());
  //   $("#email_input_"+_id).hide();$("#email_field_"+_id).show();$("#email_field_"+_id).text($("#email_input_"+_id).val());
  //   $("#company_name_input_"+_id).hide();$("#company_name_field_"+_id).show();$("#company_name_field_"+_id).text($("#company_name_input_"+_id).val());
  //   $("#company_type_input_"+_id).hide();$("#company_type_field_"+_id).show();$("#company_type_field_"+_id).text($("#company_type_input_"+_id).val());
  //   $("#industry_type_input_"+_id).hide();$("#industry_type_field_"+_id).show();$("#industry_type_field_"+_id).text($("#industry_type_input_"+_id).val());        
  //   $("#address_input_"+_id).hide();$("#address_field_"+_id).show();$("#address_field_"+_id).text($("#address_input_"+_id).val());        
  //   $("#edit_button1_"+_id).hide();$("#edit_button0_"+_id).show();
  // }
  deleteCustomer(id0){
    //let data0 = {id:id0};
    $(".confirmationPopup").attr("style","top:17%;left:31%;z-index:1;display:block !important");
    console.log($("#unarchiveButton_"+id0).attr("title"));
    let firstName = $("#unarchiveButton_"+id0).attr("title").split("_")[1];
    let lastName = $("#unarchiveButton_"+id0).attr("title").split("_")[2] || "";
    $(".confirmationPopup_h1").text(`Are you sure you want to delete ${firstName} ${lastName}`);    
    $("#sureButton_").attr("id",`sureDeleteButton_${id0}`);
    $("#cancelButton_").attr("id",`cancelDeleteButton_${id0}`);                      
  }
  viewAdmin(id0){
    $("#viewPopup").attr("style","display:block !important;margin-left:159px;z-index:1;");     
    let admin0 = $(`#viewButton_${id0}`).attr("title").split("_");    
    $("#viewPopupFullName").text(admin0[1]+" "+admin0[2]);
    $("#viewPopupMobileNumber").text(admin0[3]);
    $("#viewPopupEmail").text(admin0[4]);
    $("#viewPopupAddress").text(admin0[5]);
    $("#viewPopupCompanyName").text(admin0[6]);
    // $("#companyTypeInput").val(customer0[8]);
    // $("#industryTypeInput").val(customer0[9]);
    // $("#sureEditButton_").attr("id",`sureEditButton_${id}`);
    // $("#cancelEditButton_").attr("id",`cancelEditButton_${id}`);    
  }
  okayButton(){
    $("#viewPopup").css("display","none");
  }
  allArchivedCustomersSearchInputChange(e){
    this.setState({allArchivedCustomersSearchInput:e.target.value})
  }
  allArchivedCustomersSearch(){   
    this.setState({allArchivedCustomersSearchFieldEmptyError:false});
    this.setState({allArchivedCustomersSearchNotFoundError:false});
    fetch("/backend/admin/fetch/allArchivedCustomers/search",{
      method:"POST",      
      body: JSON.stringify({
        email:this.state.allArchivedCustomersSearchInput
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((res)=>res.json()).then((data)=>{              
        if(data === "noEmail"){
          this.setState({allArchivedCustomersSearchFieldEmptyError:true});             
          return;
        }
        else if(data === "notFound"){
          this.setState({allArchivedCustomersSearchNotFoundError:true});                 
          return;
        }
        else{          
          for(let key in data){
            if(document.getElementById("email_field_"+data[key]._id)){
              document.getElementsByClassName("rt-tbody")[0].prepend(document.getElementById("email_field_"+data[key]._id).parentElement.parentElement.parentElement.parentElement);          
            }
          }
        }
    })
    this.setState({allArchivedCustomersSearchInput:""});
  }
  componentDidMount(){
    this.getUsersData();      
  }  
  render() {
    const columns = [             
      // {
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >User Type</div>),
      //   accessor: 'user_type',
      //   Cell: (data) => (<div>
      //                     <div id={"user_type_field_"+data.original._id}>
      //                       {data.value}                          
      //                     </div>
      //                     <input id={"user_type_input_"+data.original._id} 
      //                       type="text" style={{display:"none",width:"100%"}}/>
      //                    </div>)
      // },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Name</div>),
        accessor: 'firstName',
        Cell: (data) => <div>
                          <div id={"full_name_field_"+data.original._id}>{data.value+" "}{data.original.lastName}</div>
                          <input id={"full_name_input_"+data.original._id} 
                            type="text" style={{display:"none",width:"100%"}}/>
                        </div>
      },      
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Phone</div>),
        accessor: 'mobileNumber',
        Cell: (data) => <div>
                          <div id={"mobile_number_field_"+data.original._id}>{data.value}</div>
                          <input id={"mobile_number_input_"+data.original._id} 
                            type="text" style={{display:"none",width:"100%"}}/>
                        </div>
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Email</div>),
        accessor: 'email',
        Cell: (data) => <div>
                          <div id={"email_field_"+data.original._id}>{data.value}</div>
                          <input id={"email_input_"+data.original._id} 
                            type="text" style={{display:"none",width:"100%"}}/>
                        </div>

      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Address</div>),
        accessor: 'address',
        Cell: (data) => <div>
                          <div id={"address_field_"+data.original._id}>{data.value}</div>
                          <input id={"address_input_"+data.original._id} 
                            type="text" style={{display:"none",width:"100%"}}/>
                        </div>

      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Company Name</div>),
        accessor: 'companyName', 
        Cell: (data) => <div>
                          <div id={"company_name_field_"+data.original._id}>{data.value}</div>       
                          <input id={"company_name_input_"+data.original._id} 
                            type="text" style={{display:"none",width:"100%"}}/>
                        </div>,
        width: 130
      },
      {  
        Header: () => (
          <div
            style={{
              textAlign:"center"
            }}
          >Control</div>),             
        Cell: (data) => (<div className='container '>
                            <div className='row'>
                              <button id={"unarchiveButton_"+data.original._id} className="viewButton"                                       
                                      title={"unarchiveButton_"+data.original.firstName+"_"+data.original.lastName}
                                      onClick={()=>this.deleteCustomer(data.original._id)} 
                              >
                                <span className='w-100 text-center'>Unarchive</span>
                              </button>
                            </div>                                                      
                         </div>),
        width:100     
      },
      // {
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Company Type</div>),
      //   accessor: 'companyType', 
      //   Cell: (data) => <div>
      //                     <div id={"company_type_field_"+data.original._id}>{data.value}</div>       
      //                     <input id={"company_type_input_"+data.original._id} 
      //                       type="text" style={{display:"none",width:"100%"}}/>
      //                   </div>
      // },
      // {
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Industry Type</div>),
      //   accessor: 'industryType',
      //   Cell: (data) => <div>
      //                     <div id={"industry_type_field_"+data.original._id}>{data.value}</div>        
      //                     <input id={"industry_type_input_"+data.original._id} 
      //                       type="text" style={{display:"none",width:"100%"}}/>
      //                   </div>
      // },            
      // {  
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Email Confirmed</div>), 
      //   accessor: 'is_confirm_email',
      //   Cell: (data) => <div><input type="checkbox" checked={data.value} disabled/></div>        
      // },        
      // {  
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Admin Approved</div>), 
      //   accessor: 'admin_approved',  
      //   Cell: (data) => (<div>
      //                       <input className={"admin_approve_popup_"+data.original.firstName+"_"+data.original.lastName} 
      //                               type="checkbox" 
      //                               onClick={()=>this.adminApproved(data.original._id)} 
      //                               id={"admin_approved_"+data.original._id} 
      //                               defaultChecked={data.value}
      //                       />
      //                    </div>)        
      // },
      // {  
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Deleted</div>), 
      //   accessor: 'is_deleted',  
      //   Cell: (data) => (<div><input type="checkbox" id={"is_deleted_"+data.original._id} defaultChecked={data.value} disabled/></div>)        
      // },
      // {  
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Control</div>),             
      //   Cell: (data) => (<div className='container'>
      //                       <div className='row'>
      //                         <button id={"viewButton_"+data.original._id} className="viewButton" 
      //                                 title={`viewButton_${data.original.firstName}_${data.original.lastName}_${data.original.mobileNumber}_${data.original.email}_${data.original.address}_${data.original.companyName}_${data.original.companyType}_${data.original.industryType}`}
      //                                 onClick={()=>this.viewAdmin(data.original._id)} 
      //                         >
      //                           <span className='w-100 text-center'>View</span>
      //                         </button>
      //                       </div>                          
      //                       <div className='row d-flex flex-row flex-nowrap editingBlock p-0'>
      //                         <div className='editButton p-0'>
      //                           <button id={"edit_button0_"+data.original._id} className={`edit_button`}
      //                             title={`edit_button_${data.original.firstName}_${data.original.lastName}_${data.original.mobileNumber}_${data.original.email}_${data.original.address}_${data.original.companyName}_${data.original.companyType}_${data.original.industryType}`}
      //                             onClick={()=>this.editCustomer0(data.original._id)}>
      //                             Edit
      //                           </button>                                                      
      //                         </div>
      //                         <div className='deleteButton p-0'>
      //                           <button className="delete_button" id={`delete_button_${data.original.firstName} ${data.original.lastName}`}
      //                             onClick={()=>this.deleteCustomer(data.original._id)}>
      //                             Archive
      //                           </button>
      //                         </div>
      //                       </div>                                                                                                                                      
      //                    </div>)        
      // },
      {  
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Created At</div>),
          accessor: 'createdAt',
          Cell: (data) => <div style={{display:"flex",flexDirection:"column"}}><span>{this.createdAtDate(data.value)}</span><span>{this.createdAtTime(data.value)}</span></div>       
      },     
        {  
          Header: () => (
            <div
              style={{
                textAlign:"left"
              }}
            >Updated At</div>), 
          accessor: 'updatedAt',         
          Cell: (data) => <div style={{display:"flex",flexDirection:"column"}}><span>{this.createdAtDate(data.value)}</span><span>{this.createdAtTime(data.value)}</span></div>       
        },             
  ]
  
    return (
      <>          
        <h1 className="text-center">All Archived Customers</h1>

        {/* Search */}
        <div className='container row mt-2'>
          <div className='col-10'>
            <input value={this.state.allArchivedCustomersSearchInput} onChange={this.allArchivedCustomersSearchInputChange} className='form-control w-100' type="search" placeholder='Search by email'/>
          </div>
          <div className='col-2'>
            <input className='form-control' type="submit" value='Search' onClick={this.allArchivedCustomersSearch}/>
          </div>
        </div>      
        <div className='container row mt-2'>
            {this.state.allArchivedCustomersSearchFieldEmptyError&&<h5 className="col-12" style={{color:"red"}}>Field is empty</h5>}
            {this.state.allArchivedCustomersSearchNotFoundError&&<h5 className="col-12" style={{color:"red"}}>Email not found</h5>}
        </div>
        {/* Search */}

        <ViewPopup0 okayButtonClick={this.okayButton}/>
        <ConfirmationPopup0 sureButtonClick={this.sureButton} cancelButtonClick={this.cancelButton} sureButtonRef0={this.sureButtonRef0} />                        
        <EditPopup0 sureButtonClick={this.sureButton} cancelButtonClick={this.cancelButton} sureButtonRef1={this.sureButtonRef1}/>
        <ReactTable data={this.state.users} columns={columns}  
        />      
        
      </>
    )
  }
}
