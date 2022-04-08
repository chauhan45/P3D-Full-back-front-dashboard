import React, { Component} from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css';
import './Variation2.css';
import $ from "jquery";
import ConfirmationPopup0 from '../../../../component/confirmationPopup0';
import EditPopup1 from '../../../../component/editPopup1';
import ViewPopup0 from '../../../../component/viewPopup0';

export default class AdminDashboardAllPartnersPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true,
      partnerSearchInput:"",     
      allPartnersSearchFieldEmptyError: false,
      allPartnersSearchNotFoundError: false,                       
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
    this.allPartnersSearch = this.allPartnersSearch.bind(this);
    this.allPartnersSearchInputChange = this.allPartnersSearchInputChange.bind(this);
  }
  async getUsersData(){    
    const res = await axios.post("/admin/fetch/partners")                           
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
  editCustomer0(id){ 
    window.scrollTo(0,0);  
    $("#editPartnerPopup").attr("style","display:block !important;left:475px;z-index:1;height:807px");     
    let customer0 = $(`#edit_button0_${id}`).attr("title").split("_");        
    $("#firstNameInput").val(customer0[2]);
    $("#lastNameInput").val(customer0[3]);
    $("#mobileNumberInput").val(customer0[4]);
    $("#emailInput").val(customer0[5]);
    $("#companyNameInput").val(customer0[7]);
    let address0 = customer0[6].split(",");
    $("#streetAddressInput").val(address0[0]);
    $("#cityInput").val(address0[1]);
    $("#stateInput").val(address0[2]);
    $("#zipCodeInput").val(address0[3]);    
    $("#companyTypeInput").val(customer0[8]);    
    $("#industryTypeInput").val(customer0[9]);    
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
  sureButton(){
    let id0 = this.sureButtonRef0.current.title.split("_")[1];
    let id1 = this.sureButtonRef1.current.id.split("_")[1];    
    let data0 = {id:id0};         
    if(this.sureButtonRef0.current.title.split("_")[0]==="sureApprovalButton"){
      axios.post("/backend/admin-approval-request",data0)
            .then(result=>console.log(result))
            .catch(error=>console.log(error));     
      document.getElementById("admin_approved_"+id0).checked = true;
      $("#admin_approved_"+id0).attr("disabled",true);
      $(".confirmationPopup").css("display","none");
    }
    else if(this.sureButtonRef0.current.title.split("_")[0]==="sureDeleteButton"){
      axios.post("/backend/admin-delete-customer",data0)
           .then(result=>console.log(result))
           .catch(error=>console.log(error));
      $("#is_deleted_"+id0).prop("checked",true);
      $(".confirmationPopup").css("display","none");
      document.getElementById("controlDivision_"+id0).parentElement.parentElement.remove();
    }  
    else if(this.sureButtonRef1.current.id.split("_")[0]==="sureEditButton"){          
      $("#firstNameError").css("display","none");$("#lastNameError").css("display","none");$("#mobileNumberError").css("display","none");$("#emailError").css("display","none");$("#passwordError").css("display","none");$("#confirmPasswordError").css("display","none");$("passwordMatchError").css("display","none");$("#streetAddressError").css("display","none");$("#cityError").css("display","none");$("#stateError").css("display","none");$("#zipCodeError").css("display","none");$("#companyTypeError").css("display","none");$("#industryTypeError").css("display","none");
      if($("#firstNameInput").val()===""){
        $("#firstNameError").css("display","block");
      }
      else if($("#lastNameInput").val()==="") {        
        $("#lastNameError").css("display","block");
      }   
      else if($("#mobileNumberInput").val()==="") {
        $("#mobileNumberError").css("display","block");
      }   
      else if($("#emailInput").val()==="") {
        $("#emailError").css("display","block");
      }   
      else if($("#passwordInput").val()==="") {
        $("#passwordError").css("display","block");
      }   
      else if($("#confirmPasswordInput").val()==="") {
        $("#confirmPasswordError").css("display","block");
      }
      else if($("#passwordInput").val()!==$("#confirmPasswordInput").val()){
        $("#passwordMatchError").css("display","block");
      }
      else if($("#companyNameInput").val()==="") {
        $("#companyNameError").css("display","block");
      }
      else if($("#streetAddressInput").val()==="") {
        $("#streetAddressError").css("display","block");
      }
      else if($("#cityInput").val()==="") {
        $("#cityError").css("display","block");
      }
      else if($("#stateInput").val()==="") {
        $("#stateError").css("display","block");
      }
      else if($("#zipCodeInput").val()==="") {
        $("#zipCodeError").css("display","block");
      }
      else if($("#companyTypeInput").val()===null) {
        $("#companyTypeError").css("display","block");
      }
      else if($("#industryTypeInput").val()===null) {
        $("#industryTypeError").css("display","block");
      }
      axios.post("/backend/admin-edit-customer",
          {id:id1,first_name:$("#firstNameInput").val(),last_name:$("#firstNameInput").val(),
          mobile_number:$("#mobileNumberInput").val(),email:$("#emailInput").val(), 
          address:$("#streetAddressInput").val()+","+$("#cityInput").val()+","+$("#stateInput").val()+","+$("#zipCodeInput").val(), 
          company_name:$("#companyNameInput").val(), company_type:$("#companyTypeInput").val(), industry_type:$("#industryTypeInput").val()}
      );         
    // $("#user_type_input_"+_id).hide();$("#user_type_field_"+_id).show();$("#user_type_field_"+_id).text($("#user_type_input_"+_id).val());
      $(`#full_name_field_${id1}`).text($("#firstNameInput").val()+" "+$("#lastNameInput").val());
      $(`#mobile_number_field_${id1}`).text($("#mobileNumberInput").val());
      $(`#email_field_${id1}`).text($("#emailInput").val());
      $(`#address_field_${id1}`).text($("#streetAddressInput").val()+","+$("#cityInput").val()+","+$("#stateInput").val()+","+$("#zipCodeInput").val());
      $(`#company_name_field_${id1}`).text($("#companyNameInput").val());
      // $(`#company_type_field_${id1}`).text($("#companyTypeInput").val());
      // $(`#industry_type_field_${id1}`).text($("#industryTypeInput").val());
      $("#editPartnerPopup").css("display","none");
    }
    else{
      return;
    }             
  }
  cancelButton(){
    if($(".confirmationPopup")){
      $(".confirmationPopup").css("display","none");
    }
    if($("#editPartnerPopup")){
      $("#editPartnerPopup").css("display","none");    
    }
    else{
      return; 
    }
  }
  deleteCustomer(id0){
    //let data0 = {id:id0};
    $(".confirmationPopup").attr("style","top:17%;left:31%;z-index:1;display:block !important");
    let Name = $("#delete_button_"+id0).attr("data-name");    
    $(".confirmationPopup_h1").text(`Are you sure you want to delete ${Name}`);    
    $("#sureButton").attr("title",`sureDeleteButton_${id0}`);
    $("#cancelButton").attr("title",`cancelDeleteButton_${id0}`);                      
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
  allPartnersSearchInputChange(e){
    this.setState({allPartnersSearchInput:e.target.value})
  }
  allPartnersSearch(){   
    this.setState({allPartnersSearchFieldEmptyError:false});
    this.setState({allPartnersSearchNotFoundError:false});
    fetch("/backend/admin/fetch/allPartners/search",{
      method:"POST",      
      body: JSON.stringify({
        email:this.state.allPartnersSearchInput
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((res)=>res.json()).then((data)=>{              
        if(data === "noEmail"){
          this.setState({allPartnersSearchFieldEmptyError:true});             
          return;
        }
        else if(data === "notFound"){
          this.setState({allPartnersSearchNotFoundError:true});                 
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
    this.setState({allPartnersSearchInput:""});
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
          >Company</div>),
        accessor: 'companyName', 
        Cell: (data) => <div>
                          <div id={"company_name_field_"+data.original._id}>{data.value}</div>       
                          <input id={"company_name_input_"+data.original._id} 
                            type="text" style={{display:"none",width:"100%"}}/>
                        </div>,
        width: 85
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
      {  
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Email Confirmed</div>), 
        accessor: 'is_confirm_email',
        Cell: (data) => <div className="checkboxDivision"><input type="checkbox" checked={data.value} disabled/></div>,
        width: 130      
      },        
      // {  
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Admin Approved</div>), 
      //   accessor: 'admin_approved',  
      //   Cell: (data) => (<div className="checkboxDivision"><input className={"admin_approve_popup_"+data.original.firstName+"_"+data.original.lastName} type="checkbox" onClick={()=>this.adminApproved(data.original._id)} id={"admin_approved_"+data.original._id} defaultChecked={data.value}/></div>),
      //   width: 130        
      // },
      // {  
      //   Header: () => (
      //     <div
      //       style={{
      //         textAlign:"left"
      //       }}
      //     >Archived</div>), 
      //   accessor: 'is_deleted',  
      //   Cell: (data) => (<div className="checkboxDivision"><input type="checkbox" id={"is_deleted_"+data.original._id} defaultChecked={data.value} disabled/></div>),
      //   width: 85        
      // },
      {  
        Header: () => (
          <div
            style={{
              textAlign:"center"
            }}
          >Control</div>),             
        Cell: (data) => (<div className='controlDivision container' id={"controlDivision_"+data.original._id}>
                          <div className='row'>
                            <button id={"viewButton_"+data.original._id} className="viewButton" 
                                      title={`viewButton_${data.original.firstName}_${data.original.lastName}_${data.original.mobileNumber}_${data.original.email}_${data.original.address}_${data.original.companyName}_${data.original.companyType}_${data.original.industryType}`}
                                      onClick={()=>this.viewAdmin(data.original._id)} 
                              >
                                <span className='w-100 text-center'>View</span>
                            </button>                            
                          </div>
                          <div className='row d-flex flex-row flex-nowrap editingBlock p-0'>
                            <div className='editButton p-0'>
                              <button id={"edit_button0_"+data.original._id} className="edit_button" 
                                title={`edit_button_${data.original.firstName}_${data.original.lastName}_${data.original.mobileNumber}_${data.original.email}_${data.original.address}_${data.original.companyName}_${data.original.companyType}_${data.original.industryType}`}
                                onClick={()=>this.editCustomer0(data.original._id)}>
                                Edit                                
                              </button>                                
                            </div>
                            <div className='deleteButton p-0'>
                              <button data-name={data.original.firstName+" "+data.original.lastName} className="delete_button" id={`delete_button_${data.original._id}`}
                                onClick={()=>this.deleteCustomer(data.original._id)}>
                                Archive
                              </button>
                            </div>
                          </div>
                        </div>)        
      },
      {  
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Created At</div>),
          accessor: 'createdAt',
          Cell: (data) => <div style={{display:"flex",flexDirection:"column"}}><span>{this.createdAtDate(data.value)}</span><span>{this.createdAtTime(data.value)}</span></div>,
          width: 85       
      },     
      {  
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Updated At</div>), 
        accessor: 'updatedAt',         
        Cell: (data) => <div style={{display:"flex",flexDirection:"column"}}><span>{this.createdAtDate(data.value)}</span><span>{this.createdAtTime(data.value)}</span></div>,
        width: 85       
      }
  ]
  
    return (
      <>
        <h1 className="text-center">All Partners</h1>

        {/* Search */}
        <div className='container row mt-2'>
          <div className='col-10'>
            <input value={this.state.allPartnersSearchInput} onChange={this.allPartnersSearchInputChange} className='form-control w-100' type="search" placeholder='Search by email'/>
          </div>
          <div className='col-2'>
            <input className='form-control' type="submit" value='Search' onClick={this.allPartnersSearch}/>
          </div>
        </div>      
        <div className='container row mt-2'>
            {this.state.allPartnersSearchFieldEmptyError&&<h5 className="col-12" style={{color:"red"}}>Field is empty</h5>}
            {this.state.allPartnersSearchNotFoundError&&<h5 className="col-12" style={{color:"red"}}>Email not found</h5>}
        </div>
        {/* Search */}

        <ViewPopup0 okayButtonClick={this.okayButton}/>
        <ConfirmationPopup0 sureButtonClick={this.sureButton} cancelButtonClick={this.cancelButton} sureButtonRef0={this.sureButtonRef0} />                        
          <EditPopup1 sureButtonClick={this.sureButton} cancelButtonClick={this.cancelButton} sureButtonRef1={this.sureButtonRef1}/>
        <ReactTable 
        data={this.state.users}  
        columns={columns}  
        />
      </>
    )
  }
}
