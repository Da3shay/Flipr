import React from "react";
import "./Home.scss";
import { Egress, gmail, lock } from "../Assets/image";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Home() {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const [userdata, setuserdata] = useState(0); 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:80/Flipr/api/login/", inputs)
      .then(function (response) {
      
        if (response.data) {
          localStorage.setItem('id', response.data.id);
        if(response.data.type==="admin")
        {
          navigate("/Admin");
         

        }
        else if(response.data.type==="employee")
        {
          navigate("/Employee");
        
        }
     
      } 
        else {  
          alert("Wrong login credentials");
        }
      })
      .catch(function (error) {
     
        alert("Wrong login credentials");
      });
  };
  return (
    <div className="homee">
      <div className="login_block">
        <div className="left_login">
          <img src={Egress}></img>
        </div>

        <div className="right_login">
          <h1 className="Heading">Welcome Back</h1>
          <div className="miniHeading">
            Please enter your egress account details
          </div>
          <form className="loginform" onSubmit={handleSubmit}>
            <div className="field">
              <div className="email_label">Email ID</div>
              <input
                name="email"
                onChange={handleChange}
                placeholder="Enter your email address"
                className="email"
              />
            </div>
            <div className="field">
              <div className="pass_label">Password</div>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="password"
              />
            </div>
            {/* <Link to="/Admin"> */}
            <div className="field">
              <button type="submit" className="buttonn">
                Log In
              </button>
            </div>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}
