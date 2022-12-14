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
  
    axios.get(`https://egress.000webhostapp.com/user_delete.php/${id}`).then(function(response){
     
      getUsers();
  }); 
  };

  useEffect(() => {
    getUsers();
}, []);
function getUsers() {
    axios.get(`https://egress.000webhostapp.com/users.php`).then(function(response) {
        
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
            <Link to="/admin/allemployees/viewprofile" state={{id:params.row.id}} style={{ textDecoration: "none" }}>
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
      All Employees
        <Link to="/admin/addemployee" className="link">
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
