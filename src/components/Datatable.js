import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../Admin_Pages/datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Single from "../Single";

const Datatable = () => {
  // const [data, setData] = useState(userRows);
  const [data, setdata] = useState([]);

  const handleDelete = (id) => {
  
    axios.delete(`http://localhost:80/Flipr/api/users/${id}`).then(function(response){
      console.log(response.data);
      getUsers();
  });

    
  };

  useEffect(() => {
    getUsers();
}, []);
function getUsers() {
    axios.get(`http://localhost:80/Flipr/api/users`).then(function(response) {
        console.log(response.data,"Daljsya");
        setdata(response.data);
    });
}


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/Viewprofile" state={{id:params.row.id}} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
              {/* <div style={{display:"none"}}><Single id={params.row.id}/></div> */}
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Deactivate
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
       Your Tasks
        <Link to="/NewUser" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
