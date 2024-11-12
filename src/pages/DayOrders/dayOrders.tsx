import { useState } from "react";
import "./dayOrders.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { dayOrders } from "../../data"; // Importing the dayOrders data


const columns: GridColDef[] = [
  { field: "orderDetailId", headerName: "Order Detail ID", width: 150  },
  { field: "orderId", headerName: "Order ID", width: 150 },
  { field: "employeeName", headerName: "Employee Name", width: 150 },
  { field: "organizationName", headerName: "Organization Name", width: 200 },
  { field: "menuItemName", headerName: "Menu Item Name", width: 200 },
  { field: "quantity", headerName: "Quantity", width: 150 },
  { field: "totalPrice", headerName: "Total Price", width: 150 },
  { field: "dayOfWeek", headerName: "Day of the Week", width: 150 },
  {
    field: "mealDate",
    headerName: "Meal Date",
    width: 200,
    type: "date",
    valueGetter: (params) => new Date(params.row.mealDate), // Convert string to Date object
    valueFormatter: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString(); // Format as a readable date string
    },
  },
];

const DayOrders = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1 style={{fontFamily: "math", fontSize: "25px"}}>Day Orders</h1>
        <button className="btn-addNew" onClick={() => setOpen(true)}>Add New Day Order</button>
      </div>

      {/* DataGrid with getRowId to ensure each row has a unique identifier */}
      <DataTable 
        slug="dayOrders" 
        columns={columns} 
        rows={dayOrders} 
        getRowId={(row) => row.orderDetailId} // Use orderDetailId as the unique identifier for each row
      />

      {open && <Add slug="orders" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default DayOrders;
