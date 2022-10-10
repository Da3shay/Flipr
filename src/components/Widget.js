import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import axios from "axios";
import { useState,useEffect } from "react";

const Widget = ( props ) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  const [users, setUsers] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);
  function getUsers() {
      axios.get('https://egress.000webhostapp.com/admin_dash.php/').then(function(response) {
       
          setUsers(response.data,);
      });
  }


  switch (props.type) {
    case "user":
      data = {
        title: "All Employees",
        isMoney: false,
        link: "See all Employees",
       
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Average working time (in mins)",
        isMoney: false,
        link: "",
      
        icon: (
          <WorkIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Average meeting time (in mins) ",
        isMoney: true,
        link: "",
        
        icon: (
          < GroupsIcon
          
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title:"Average break time (in mins) " ,
        isMoney: true,
        link: "",
        
        icon: (
          <FreeBreakfastIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {Math.trunc(props.dataa)}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
