import React from "react";
import Sidebar2 from "./components/Sidebar2";
import Navbar from "./components/Navbar";
import "./newuser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

export default function Newuser() {
  const [file, setFile] = useState("");
  const id = parseInt(localStorage.getItem("id"));
 const [userdata, setuserdata] = useState([]);

  const title = "Add New Task ";
  const inputs = [
    {
      id: 1,
      label: "Start Date ",
      type: "date",
      placeholder: "John Doe",
      name:"date"
    },
    {
      id: 2,
      label: "Start Time",
      type: "time",
      placeholder: "johndoe@gmail.com",
      name:"start"
    },
    {
      id: 3,
      label: "Duration",
      type: "text",
      id: "datePickerId",
      placeholder: "",
      name:"duration"
    },
    {
      id: 4,
      label: "Description",
      type: "text",
      name:"desc"
    },
    {
        id: 5,
        type: "hidden",
        name:"emp_id",
        value:{id}
      },
      {
        id: 6,
        type: "hidden",
        
      },    
    
  ];
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setuserdata((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userdata,"dsdsdsasasasasdes")  
    axios
      .post("http://localhost:80/Flipr/api/tasks", userdata)
      .then(function (response) {
      console.log(response,"dsdsdsdes")  
      })
      .catch(function (error) {
     
       
      });
  };

  return (
    <div className="new">
      <Sidebar2 />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type}  onChange={handleChange} name={input.name} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label>Type</label>
                <select id="cars" name="type"  onChange={handleChange}>
                  <option value="work" selected>Work</option>
                  <option value="break"> Break</option>
                  <option value="meeting"> Meeting</option>
                </select>
              </div>
              <div className="formInput">
                <button type="submit" style={{ float: "right" }}>Add Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
