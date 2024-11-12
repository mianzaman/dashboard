import { useState } from "react";
import "./orders.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { individualsOrders } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "employeeName", headerName: "Employee Name", width: 140, type: "number" },
  { field: "organizationName", headerName: "Organization Name", width: 200, type: "string" },
  { 
    field: "mealOrdered", 
    headerName: "Ordered Meal Items", 
    width: 400, 
    type: "string",
    valueGetter: (params) => {
      return params.row.mealOrdered.map((item: any) => 
        `${item.name} (Qty: ${item.quantity}, Price: ${item.price} ,Total: ${item.quantity * item.price})`
      ).join(", ");
    }
  }, 
  { 
    field: "orderDate", 
    headerName: "Order Date", 
    width: 200, 
    type: "date", 
    valueGetter: (params) => new Date(params.row.orderDate),
    valueFormatter: (params) => new Date(params.value).toLocaleString(),
  },
  { field: "paymentStatus", headerName: "Payment Status", width: 150, type: "string" },
];

const Orders = () => {
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
        <h1 style={{fontFamily: "math", fontSize: "25px"}} >Individuals Orders</h1>
        <button className="btn-addNew" onClick={() => setOpen(true)}>Add New Individuals Orders</button>
      </div>
      <DataTable slug="orders" columns={columns} rows={individualsOrders} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="Individuals Orders" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Orders;
