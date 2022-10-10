import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import "./Admin.scss";
import Widget from '../components/Widget';
import Featured from '../components/Featured';
import Chart from '../components/Chart';
import Table from '../components/Table';
import axios from "axios";
import { useState,useEffect } from "react";


export default function Admin() {


  const [users, setUsers] = useState();
  const [worhour, setworhour] = useState();
  const [meetinghour, setmeetinghour] = useState();
  const [breakhour, setbreakhour] = useState();
  const piedata =[worhour,meetinghour,breakhour];

  useEffect(() => {
      getUsers();
      getbreakhours();
      getmeetinghours();
      getworkhours();
     
  }, []);
  function getUsers() {
      axios.get('https://egress.000webhostapp.com/admin_dash.php/').then(function(response) {
         
          setUsers(response.data.user_count);
      });
  }

  function getworkhours() {
    axios.get('https://egress.000webhostapp.com/admin_dash.php/').then(function(response) {
       
        setworhour(response.data.Avg_work);
    });
}
function getmeetinghours() {
  axios.get('https://egress.000webhostapp.com/admin_dash.php/').then(function(response) {
      
      setmeetinghour(response.data.Avg_meet);
  });
}
function getbreakhours() {
  axios.get('https://egress.000webhostapp.com/admin_dash.php/').then(function(response) {
   
      setbreakhour(response.data.Avg_break);
  });
}

  return (
    <div>
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets" >
          <Widget type="user" dataa={users} />
          <Widget type="order" dataa={worhour} />
          <Widget type="earning" dataa={meetinghour}/>
          <Widget type="balance" dataa={breakhour} />
        </div>
        <div className="charts">
        <div className="listContainer">
          <div className="listTitle">Recent users added</div>
          <Table />
        </div>
          <div style={{width:"100%", marginTop:"25px"}}><Chart piedata={piedata} /></div>
        </div>
        
      </div>
    </div>
    </div>

  )
  
}

