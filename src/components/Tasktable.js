import "./tasktable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datasource2";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Datatable = () => {
  // const [data, setData] = useState(userRows);
  const id= parseInt(localStorage.getItem('id'));

  const [data, setdata] = useState([]);
  useEffect(() => {
    getUsers();
}, []);
function getUsers() {
    axios.get(`http://localhost:80/Flipr/api/tasks/${id}`).then(function(response) {
        console.log(response.data,"Daljsya");
        setdata(response.data);
    });
}


  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
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
