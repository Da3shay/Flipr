import React from 'react'
import Sidebar  from './components/Sidebar';
import Navbar from './components/Navbar';
import "./Admin.scss";
import Widget from './components/Widget';
import Featured from './components/Featured';
import Chart from './components/Chart';
import Table from './components/Table';


export default function Admin() {

  console.log(localStorage.getItem('id'),"sdhsgdhsdhs");
  return (
    <div>
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
        <div className="listContainer">
          <div className="listTitle">Recent users added</div>
          <Table />
        </div>
          <div style={{width:"100%"}}><Chart /></div>
        </div>
        
      </div>
    </div>
    </div>

  )
}
