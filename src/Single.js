import "./single.scss";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import Table from "./components/Table";
import Chartprofileone from "./components/Chartprofileone"
import Stackedbarchart from "./components/Stackedbarchart"
import {useLocation } from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import Chartprofilethree from "./components/Chartprofilethree";

const Single = (props) => {
const location=useLocation();
const profile=location.state;
const [users, setUsers] = useState([]);
const [userdataa, setuserdataa] = useState();

//  userdataa;

useEffect(() => {
  getUsers();
  getdata();
}, []);
function getUsers() {
  axios.get(`https://egress.000webhostapp.com/users.php/${profile.id}`).then(function(response) {
      
      setUsers(response.data);
  });
}

function getdata() {
  axios.get(`https://egress.000webhostapp.com/task_data.php/${profile.id}`).then(function(response) {
  if(response.data){
    setuserdataa(response.data);
    console.log(response.data,"response.data");

  } 
  else{
    alert("No task");

  }  
 
  });
}



  return (
    <div className="single">
     
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="itemTitle">{users.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{users.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{users.contact}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">{users.department}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{users.type}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Joining Date:</span>
                  <span className="itemValue">{users.join_date}</span>
                </div>
              </div>
            </div>
          </div>
         
          <div className="right">
         
            <Chartprofilethree userdataa={userdataa} />
            <div style={{position:"absolute", left:"100px",bottom:"50px"}}>Today's Performance</div>
            <div style={{position:"absolute", left:"570px",bottom:"50px"}}>Yesterday's Performance</div>
            
          </div>
       
        </div>

        <div className="bottom">
        <h1 className="title">Weekly Performance</h1>
          <Stackedbarchart userdataa={userdataa}/>
        </div>
      </div>
    </div>
  );
};

export default Single;
