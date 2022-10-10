import "./tasktable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../Employee_Pages/datasource2";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Datatable = () => {
  // const [data, setData] = useState(userRows);
  const id = parseInt(localStorage.getItem("id"));

  const [data, setdata] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get(`https://egress.000webhostapp.com/tasks.php/${id}`)
      .then(function (response) {
        setdata(response.data);
      });
  }
  const handleDelete = (id) => {
    axios
      .get(`https://egress.000webhostapp.com/task_delete.php/${id}`)
      .then(function (response) {
        getUsers();
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
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
        My Tasks
        <Link to="/employee/addtasks" className="link">
          Add New Task
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
