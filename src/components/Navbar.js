import * as React from "react";
import "./Navbar.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
const logout=()=>{
  localStorage.removeItem('id');
}


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div class="dropdown">
            <button class="dropbtn">
            <AccountCircleIcon

            style={{
            
              color: "rgb(136, 132, 216)",
              width:"60px",
              height:"60px"
            }}
          />
            </button>
            <div class="dropdown-content">
              <a href="#">   <Link to="/Profile" style={{ textDecoration: "none"}}  className="linkk" onClick={logout}>Profile </Link></a>
               <a href="#" >  <Link to="/" style={{ textDecoration: "none"}}  className="linkk" onClick={logout}> Log Out </Link></a> 
            </div>
          </div>

          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
