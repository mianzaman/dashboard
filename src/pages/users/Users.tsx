import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
 
  {
    field: "firstName",
    type: "string",
    headerName: "Full Name",
    width: 150,
  },
  {
    field: "companyName",
    type: "string",
    headerName: "Company name",
    width: 200,
  },
  {
    field: "phone",
    type: "tel",
    headerName: "WhatsApp Number",
    width: 200,
  },
  {
    field: "email",
    type: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "verified",
    headerName: "Authentication Status",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then(
        (res) => res.json()
      ),
  });
   // Define the getRowId function
  // const getRowId = (row: any) => row.id;
  const getRowId = (row: any) => row._id || row.id; // Use _id if id is 

  return (
    <div className="users">
      <div className="info">
        <h1 style={{fontFamily: "math", fontSize: "25px"}}>Users</h1>
        <button className="btn-addNew" onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      
       {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} getRowId={getRowId} />
      )}  */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen}  />}
    </div>
  );
};

export default Users;
