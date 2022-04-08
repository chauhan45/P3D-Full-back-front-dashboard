import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css';



export default class partners extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true
    }
  }
  async getUsersData() {
    const res = await axios.post("/fetch/partners")
    console.log(res.data)
    this.setState({ loading: false, users: res.data })

  }
  componentDidMount() {
    this.getUsersData()
  }

  render() {
    const columns = [
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >first Name</div>),
        accessor: 'firstName',
      }, 
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Last Name</div>),
        accessor: 'lastName',
      }, 
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Mobile Number</div>),
        accessor: 'mobileNumber',
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Email</div>),
        accessor: 'email',
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >user_type</div>),
        accessor: 'user_type',
        Cell: ({original }) => (
          <button className="btn btn-primary">
            active 
          </button>
        )
        
      },
      
    ]
    return (
      <>
        <h1 className="text-center"> Partners</h1>
        <ReactTable
          data={this.state.users}
          columns={columns}
        />
      </>
    )
  }
}






