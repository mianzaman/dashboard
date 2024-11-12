import { useState } from "react";
import "./company.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { companies } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "organizationName", headerName: "Organisation Name", width: 200, type: "string" },
  { field: "officeAddress", headerName: "Office Address", width: 250, type: "string" },
  { field: "accessCode", headerName: "Access Code", width: 150, type: "string" },
  { field: "notificationTime", headerName: "Notification Time (time when employees should receive reminders to order)", width: 300, type: "string" },
  { field: "orderDeadline", headerName: "Order Deadline (time before which orders should be placed)", width: 300, type: "string" },
  { field: "scheduledDeliveryFrom", headerName: "Scheduled Delivery From", width: 150, type: "string" },
  { field: "scheduledDeliveryTo", headerName: "Scheduled Delivery To", width: 150, type: "string" },
];

const Companies = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1 style={{fontFamily: "math", fontSize: "25px"}}> Organization Details </h1>
        <button className="btn-addNew" onClick={() => setOpen(true)}>Add New Company </button>
      </div>
      <DataTable slug="dayOrders" columns={columns} rows={companies} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="Organization" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Companies;
