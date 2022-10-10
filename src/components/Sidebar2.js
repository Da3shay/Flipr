import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Egresslogo } from "../Assets/image";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
const logout=()=>{
  localStorage.removeItem('id');
}

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/Employee" style={{ textDecoration: "none" }}>

         <span><img className="logo" src={Egresslogo}/></span> 
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/Employee" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          
          <p className="title">ACTIONS</p>
          <Link to="/employee/tasks" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>My tasks</span>
            </li>
          </Link>
          {/* <p className="title">USEFUL</p> */}
          <li>
          <Link to="/employee/addtasks" style={{ textDecoration: "none" }}>
            <InsertChartIcon className="icon" />
            <span>Add Tasks</span>
            </Link>
          </li>

          <p className="title">SERVICE</p>


          {/* <p className="title">USER</p> */}
          <Link to="/" style={{ textDecoration: "none" }}>
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span >Logout</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
