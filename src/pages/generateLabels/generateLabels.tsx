import "./generateLabels.scss";
import DataTable from "../../components/dataTable/DataTable";
import { useState, useEffect } from "react";
import { Button, Typography, IconButton, TextField } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import * as XLSX from "xlsx";  // For exporting to Excel/CSV

const GenerateLabels = () => {
  interface Label {
    id: string;
    employeeName: string;
    organizationName: string;
    mealItem: string;
    label: string;
    orderDate: string;
  }
  
  const [generatedLabels, setGeneratedLabels] = useState<Label[]>([]);
  const [filteredLabels, setFilteredLabels] = useState<Label[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Simulated daily orders (would usually come from an API)
  const dailyOrders = [
    {
      id: 1,
      employeeName: "John Doe",
      organizationName: "Microsoft",
      mealItem: "Chicken Curry",
      quantity: 3, // John Doe ordered 3 Chicken Curries
      orderDate: "2024-10-05", // Adding date for filtering
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      organizationName: "Google",
      mealItem: "Beef Burger",
      quantity: 1, // Jane Smith ordered 1 Beef Burger
      orderDate: "2024-10-04", // Adding date for filtering
    },
  ];

  // Automatically generate labels on page load
  useEffect(() => {
    const generateLabels = () => {
      const labels: { id: string; employeeName: string; organizationName: string; mealItem: string; label: string; orderDate: string }[] = [];
      dailyOrders.forEach((order) => {
        const { employeeName, organizationName, mealItem, quantity, orderDate } = order;

        // Generate multiple labels based on the quantity
        for (let i = 0; i < quantity; i++) {
          labels.push({
            id: `${order.id}-${i + 1}`, // Create unique ID for each label
            employeeName,
            organizationName,
            mealItem,
            label: `${mealItem} – ${organizationName} – ${employeeName}`,
            orderDate, // Include order date for filtering
          });
        }
      });

      setGeneratedLabels(labels);  // Set the generated labels
      setFilteredLabels(labels);   // Set filtered labels initially to show all
    };

    generateLabels();  // Automatically generate labels when component loads
  }, []);  // Empty dependency array ensures it runs only on initial render

  // Handle date filter
  const handleFilter = () => {
    const filtered = generatedLabels.filter((label) => {
      const labelDate = new Date(label.orderDate);
      const start = new Date(startDate);
      const end = new Date(endDate);

      return labelDate >= start && labelDate <= end;
    });
    setFilteredLabels(filtered);
  };

  // Logic to export all labels to CSV/Excel
  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredLabels);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Labels");
    XLSX.writeFile(workbook, "meal_labels.xlsx");
  };

  // Logic to export individual label to CSV/Excel
  const exportIndividualToCSV = (label: Label) => {
    const worksheet = XLSX.utils.json_to_sheet([label]);  // Convert single label to sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Label");
    XLSX.writeFile(workbook, `${label.employeeName}_label.xlsx`);
  };

  // Define columns for the table, including date and individual download button
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "employeeName", headerName: "Employee Name", width: 200 },
    { field: "organizationName", headerName: "Organization", width: 200 },
    { field: "mealItem", headerName: "Meal Item", width: 200 },
    { field: "label", headerName: "Label", width: 400 },
    { field: "orderDate", headerName: "Order Date", width: 150 }, // Date field added
    {
      field: "downloadLabel",
      headerName: "Download Label",
      width: 150,
      renderCell: (params: { row: Label }) => (
        <IconButton onClick={() => exportIndividualToCSV(params.row)}>
          <DownloadIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div className="generateLabels">
      <div className="info">
        <Typography variant="h4" gutterBottom style={{fontFamily: "math", fontSize: "25px"}}>
          Generate Meal Labels
        </Typography>

        {/* Date Filter */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px", padding: "1rem",color:"#fff" }}>
          <TextField
            label="Start Date"
            type="date"
            color="secondary"
            InputProps={{
            style: { color: "#fff" },
              }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
              style: { color: "#fff" }, // Custom label color
            }}
          />
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputProps={{
                style: { color: "#fff" },
                  }}
            InputLabelProps={{
              shrink: true,
              style: { color: "#fff" }, // Custom label color
            }}
          />
          
          <Button className="generateButton" variant="contained" onClick={handleFilter}>
            Filter by Date
          </Button>
        </div>

        {/* Button to export all to CSV/Excel */}
        <Button className="generateButton"
          variant="contained"
          onClick={exportToCSV}
          style={{ marginLeft: "4px" }}
        >
          Export Data
        </Button>
      </div>

      {/* DataTable displaying generated labels */}
      <DataTable 
        slug="labels" 
        columns={columns} 
        rows={filteredLabels} 
        getRowId={(row) => row.id} 
      />
    </div>
  );
};

export default GenerateLabels;
