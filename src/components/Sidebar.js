import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Egresslogo } from "../Assets/image";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

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
    <div className="sidebar">
      <div className="top">
        <Link to="/Admin" style={{ textDecoration: "none" }}>

         <span><img className="logo" src={Egresslogo}/></span> 
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/Admin" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          
          <p className="title">ACTIONS</p>
          <Link to="/Users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Employee List</span>
            </li>
          </Link>
          {/* <p className="title">USEFUL</p> */}
          <li>
          <Link to="/Newuser" style={{ textDecoration: "none" }}>
            <InsertChartIcon className="icon" />
            <span>Add Employee</span>
            </Link>
          </li>

          <p className="title">SERVICE</p>


          {/* <p className="title">USER</p> */}
          {/*    */}
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span >Logout</span>
          </li>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
