import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./newuser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

export default function Newuser() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;
  const [file, setFile] = useState("");
 const [userdata, setuserdata] = useState([]);

  const title = "Add new Employee ";
  const inputs = [
    {
      id: 1,
      label: "Name ",
      type: "text",
      placeholder: "John Doe",
      name:"name"
    },
    {
      id: 2,
      label: "Email",
      type: "email",
      placeholder: "johndoe@gmail.com",
      name:"email"
    },
    {
      id: 3,
      label: "Joining Date",
      type: "date",
      id: "datePickerId",
      placeholder: "",
      name:"join_date",
      max:today
    },
    {
      id: 4,
      label: "Phone",
      type: "tel",
      placeholder: "+1 234 567 89",
      name:"contact"
    },
    {
      id: 5,
      label: "Password",
      type: "password",
      name:"password"
    },
    {
      id: 6,
      label: "Department",
      type: "text",
      placeholder: "Accounts",
      name:"department"
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
      .post("http://localhost:80/Flipr/api/users", userdata)
      .then(function (response) {
      console.log(response,"dsdsdsdes")  
      })
      .catch(function (error) {
     
       
      });
  };

  return (
    <div className="new">
      <Sidebar />
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
                  <input type={input.type}  onChange={handleChange} max={input.max} name={input.name} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label>Type</label>
                <select id="cars" name="type"  onChange={handleChange}>
                  <option value="admin" selected>Admin</option>
                  <option value="employee"> Employee</option>
                </select>
              </div>
              <div className="formInput">
                <button type="submit" style={{ float: "right" }}>Add User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
