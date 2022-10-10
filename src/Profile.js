import React from 'react'
import './profile.scss'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import axios from "axios";
import { useState,useEffect } from "react";
import Sidebar2 from './components/Sidebar2'

export default function Profile() {
  const [users, setUsers] = useState([]);
 const id= parseInt(localStorage.getItem('id'));


  useEffect(() => {
      getUsers();
  }, []);
  function getUsers() {
      axios.get(`https://egress.000webhostapp.com/users.php/${id}`).then(function(response) {

          setUsers(response.data);
      });
  }


  return (
    <div>
    <div className="Profile">
    {users.type=="admin"?<Sidebar/>:<Sidebar2/>}
    <div className="Profilecontainer">
      <Navbar />
      <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Your Profile</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="itemTitle">{users.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{users.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{users.contact}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">
                  {users.department}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">
                  {users.type}
                  </span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Joining Date:</span>
                  <span className="itemValue">
                  {users.join_date}
                  </span>
                </div>
            
              
              </div>
            </div>
          </div>
          <div className="right">
       
          </div>
        </div>
  
      

    </div>
  </div>
  </div>
  )
}
