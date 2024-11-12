import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    type: "string",
    headerName: "Meal Name",
    width: 250,
  },
  {
    field: "ingredients",
    type: "string",
    headerName: "Ingredients",
    width: 150,
  },
  {
    field: "allergens",
    type: "string",
    headerName: "Allergens",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 150,
  },
  {
    field: "originalStock",
    type: "number",
    headerName: "Stock ",
    width: 100,
  },
  {
    field: "remainingStock",
    type: "number",
    headerName: "Remaining Stock ",
    width: 200,
  },
  {
    field: "mealType",
    type: "string",
    headerName: "Meal Type",
    width: 150,
  },
  {
    field: "dayOfWeek",
    type: "string",
    headerName: "Day of the Week",
    width: 150,
  },
  {
    field: "orderDate",
    type: "date",
    headerName: "Order Date ",
    width: 150,
    valueGetter: (params) => new Date(params.row.orderDate), // Convert string to Date object
    valueFormatter: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString(); // Format as a readable date string
  }
},
  {
    field: "availability",
    type: "boolean",
    headerName: "Availability Status",
    width: 200,
  },
];

const Products = () => {
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
        <h1 style={{fontFamily: "math", fontSize: "25px"}}>Menu</h1>
        <button className="btn-addNew" onClick={() => setOpen(true)}>Add New Menu</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="Menu Items" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
