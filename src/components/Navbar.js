import * as React from "react";
import "./Navbar.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link,useNavigate } from "react-router-dom";



const Navbar = () => {
  let navigate = useNavigate();
  const logout=()=>{
    const confirmBox = window.confirm(
      "Are you sure you want to log out?"
    )
    if (confirmBox === true) {
      
    {
      navigate('/');
      localStorage.removeItem('id');   
      }
  }
  }

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
              <a href="#">   <Link to="/Profile" style={{ textDecoration: "none"}}  className="linkk">Profile </Link></a>
               <a href="#" >  <div to style={{ textDecoration: "none"}}  className="linkkk" onClick={logout}> Log Out </div></a> 
            </div>
          </div>

          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
