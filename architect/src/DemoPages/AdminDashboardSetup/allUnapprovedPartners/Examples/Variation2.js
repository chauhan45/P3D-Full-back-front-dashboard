import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css';
import './Variation2.css';
import $ from "jquery";
import ConfirmationPopup0 from '../../../../component/confirmationPopup0';
import EditPopup0 from '../../../../component/editPopup0';
import ViewPopup0 from '../../../../component/viewPopup0';

export default class AdminDashboardAllUnApprovedPartners extends Component {  
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true,    
      allAdminsSearchInput:"",
      allAdminsSearchFieldEmptyError: false,
      allAdminsSearchNotFoundError: false,   
    }        
    this.sureButtonRef0 = React.createRef();
    this.sureButtonRef1 = React.createRef();
    this.getUsersData = this.getUsersData.bind(this);    
    this.createdAtDate = this.createdAtDate.bind(this);
    this.createdAtTime = this.createdAtTime.bind(this);    
    this.adminApproved = this.adminApproved.bind(this);    
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.sureButton = this.sureButton.bind(this);
    this.cancelButton = this.cancelButton.bind(this);  
    this.viewAdmin = this.viewAdmin.bind(this); 
    this.okayButton = this.okayButton.bind(this);
    this.allAdminsSearch = this.allAdminsSearch.bind(this);
    this.allAdminsSearchInputChange = this.allAdminsSearchInputChange.bind(this);
  }
  async getUsersData(){    
    const res = await axios.post("/admin/fetch/unapproved/partners")                           
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
    let id0 = this.sureButtonRef0.current.title.split("_")[1];    
    let data0 = {id:id0};
    console.log(this.sureButtonRef0.current.title);              
    if(this.sureButtonRef0.current.title.split("_")[0]==="sureApproveButton"){
      axios.post("/backend/admin-delete-customer",data0)
           .then(result=>console.log(result))
           .catch(error=>console.log(error));
      document.getElementById("controlDivision_"+id0).parentElement.parentElement.remove();      
      $(".confirmationPopup").css("display","none");
    }
    else if(this.sureButtonRef0.current.title.split("_")[0]==="sureDeleteButton"){
      axios.post("/backend/admin/edit/approve/partner",data0)
           .then(result=>console.log(result))
           .catch(error=>console.log(error));      
      document.getElementById("controlDivision_"+id0).parentElement.parentElement.remove();         
      $(".confirmationPopup").css("display","none");
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
    let Name = $("#delete_button_"+id0).attr("data-name");    
    $(".confirmationPopup_h1").text(`Are you sure you want to delete ${Name}`);    
    $("#sureButton").attr("title",`sureDeleteButton_${id0}`);
    $("#cancelButton").attr("title",`cancelDeleteButton_${id0}`);                      
  }
  viewAdmin(id0){
    $(".confirmationPopup").attr("style","top:17%;left:31%;z-index:1;display:block !important");    
    let Name = $("#delete_button_"+id0).attr("data-name");    
    $(".confirmationPopup_h1").text(`Are you sure you want to approve ${Name}`);         
    $("#sureButton").attr("title",`sureApproveButton_${id0}`);
    $("#cancelButton").attr("title",`cancelApproveButton_${id0}`);                                               
  }
  okayButton(){
    $("#viewPopup").css("display","none");
  }
  allAdminsSearchInputChange(e){
    this.setState({allAdminsSearchInput:e.target.value})
  }
  allAdminsSearch(){   
    this.setState({allAdminsSearchFieldEmptyError:false});
    this.setState({allAdminsSearchNotFoundError:false});
    fetch("/backend/admin/fetch/allAdmins/search",{
      method:"POST",      
      body: JSON.stringify({
        email:this.state.allAdminsSearchInput
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((res)=>res.json()).then((data)=>{              
        if(data === "noEmail"){
          this.setState({allAdminsSearchFieldEmptyError:true});             
          return;
        }
        else if(data === "notFound"){
          this.setState({allAdminsSearchNotFoundError:true});                 
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
    this.setState({allAdminsSearchInput:""});
  }
  componentDidMount(){
    this.getUsersData();      
  }  
  render() {
    const columns = [                   
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Name</div>),
        accessor: 'firstName',
        Cell: (data) => <div style={{width:"100% !important"}}>
                          <div id={"full_name_field_"+data.original._id}>{data.value+" "}{data.original.lastName}</div>
                          <input id={"full_name_input_"+data.original._id} 
                            type="text" style={{display:"none",width:"100%"}}/>
                        </div>,
      
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
          >Email Confirmed</div>), 
        accessor: 'is_confirm_email',
        Cell: (data) => <div style={{margin:"auto"}}><input type="checkbox" checked={data.value} disabled/></div>,
        width: 130        
      },              
      {  
        Header: () => (
          <div
            style={{
              textAlign:"center"
            }}
          >Control</div>),             
        Cell: (data) => (<div className='container' id={"controlDivision_"+data.original._id}>
                            <div className='row'>
                              <button id={"viewButton_"+data.original._id} className="viewButton" 
                                      title={`viewButton_${data.original.firstName}_${data.original.lastName}_${data.original.mobileNumber}_${data.original.email}_${data.original.address}_${data.original.companyName}_${data.original.companyType}_${data.original.industryType}`}
                                      onClick={()=>this.viewAdmin(data.original._id)} 
                              >
                                <span className='w-100 text-center'>Approve</span>
                              </button>                                                                                      
                                <button data-name={data.original.firstName+" "+data.original.lastName} className="delete_button unapprovedPartnerArchive" id={`delete_button_${data.original._id}`}
                                  onClick={()=>this.deleteCustomer(data.original._id)}>
                                  Archive
                                </button>                              
                            </div>                                                                                                                                      
                         </div>),
        width:100        
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
          width: 80       
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
          width: 80
        },             
  ]
  
    return (
      <>                
        <h1 id="adminHeading" className="text-center">All Unapproved Partners</h1>

        {/* Search */}
        <div className='container row mt-2'>
          <div className='col-10'>
            <input value={this.state.allAdminsSearchInput} onChange={this.allAdminsSearchInputChange} className='form-control w-100' type="search" placeholder='Search by email'/>
          </div>
          <div className='col-2'>
            <input className='form-control' type="submit" value='Search' onClick={this.allAdminsSearch}/>
          </div>
        </div>      
        <div className='container row mt-2'>
            {this.state.allAdminsSearchFieldEmptyError&&<h5 className="col-12" style={{color:"red"}}>Field is empty</h5>}
            {this.state.allAdminsSearchNotFoundError&&<h5 className="col-12" style={{color:"red"}}>Email not found</h5>}
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
