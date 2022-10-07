import React from "react";
import "./Home.scss";
import { Egress, gmail, lock } from "./Assets/image";
import Admin from "./Admin";

const login=()=>
{
    
}
export default function Home() {
   
  return (
    <div className="home">
      <div className="login_block">
        <div className="left_login">
          <img src={Egress}></img>
        </div>

        <div className="right_login">
          <h1 className="Heading">Welcome Back</h1>
          <div className="miniHeading">
            Please enter your egress account details
          </div>
          <form className="loginform">
          <div className="field">
            <div className="email_label">Email ID</div>
            <input   placeholder="Enter your email address" className="email"/>
          </div>
          <div className="field">
            <div className="pass_label" >Password</div>
            <input  placeholder="Enter your password" className="password"/>
          </div>
          <div className="field">
           <button className="buttonn" onClick={login}>Log In</button>
          </div>

          </form>
       
        </div>
      </div>
    </div>
  );
}
