import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from '@mui/x-data-grid';

const orderData = [
  {
    date: 'Thursday, 26 September 2024',
    orders: [
      {
        partner: 'Boost',
        item: 'Boost: Chick Overboard / Loaded Chicken Salad',
        clients: { BBT: 1, BLW: 1, CCB: 2, CG: 4, N1: 1, RT: 1, ST: 1, TW: 2, WAT: 2 },
        total: 12,
      },
      {
        partner: 'Fortify',
        item: 'Fortify: Mushroom, Lentils & Peas Pie',
        clients: { BBT: 1, BLW: 2, CCB: 1, CG: 1, N1: 1, RT: 0, ST: 1, TW: 0, WAT: 0 },
        total: 5,
      },
    ],
    totals: { BBT: 4, BLW: 13, CCB: 15, CG: 15, N1: 5, RT: 10, ST: 11, TW: 14, WAT: 15 },
    grandTotal: 87,
  },
  {
    date: 'Friday, 27 September 2024',
    orders: [
      {
        partner: 'Boost',
        item: 'Boost: My Special Salmon / Salmon & Cottage Cheese Salad',
        clients: { BBT: 1, BLW: 0, CCB: 1, CG: 1, N1: 1, RT: 0, ST: 1, TW: 1, WAT: 0 },
        total: 5,
      },
      {
        partner: 'Fortify',
        item: 'Fortify: Mixed Beans, Chickpea & Vegetables Casserole',
        clients: { BBT: 1, BLW: 1, CCB: 1, CG: 4, N1: 3, RT: 2, ST: 1, TW: 2, WAT: 0 },
        total: 15,
      },
    ],
    totals: { BBT: 5, BLW: 12, CCB: 10, CG: 12, N1: 7, RT: 10, ST: 12, TW: 12, WAT: 12 },
    grandTotal: 112,
  },
];

const OrdersSummary = () => {
  const columns: GridColDef[] = [
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'partner', headerName: 'Partner', width: 150 },
    { field: 'item', headerName: 'Item', width: 300 },
    { field: 'BBT', headerName: 'BBT', width: 100 },
    { field: 'BLW', headerName: 'BLW', width: 100 },
    { field: 'CCB', headerName: 'CCB', width: 100 },
    { field: 'CG', headerName: 'CG', width: 100 },
    { field: 'N1', headerName: 'N1', width: 100 },
    { field: 'RT', headerName: 'RT', width: 100 },
    { field: 'ST', headerName: 'ST', width: 100 },
    { field: 'TW', headerName: 'TW', width: 100 },
    { field: 'WAT', headerName: 'WAT', width: 100 },
    { field: 'total', headerName: 'Total', width: 100 },
  ];

  const rows = orderData.flatMap((day) =>
    day.orders.map((order, index) => ({
      id: `${day.date}-${index}`,
      date: day.date,
      partner: order.partner,
      item: order.item,
      ...order.clients,
      total: order.total,
    }))
  );

  return (
    <Paper  sx={{ backgroundColor: 'transparent' , borderRadius: '20px' }} >
      {orderData.map((day) => (
        <Accordion sx={{ "background":'#E5E5E5' }}  key={day.date} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{day.date}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid 
                rows={rows.filter(row => row.date === day.date)}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 5 },
                  },
                }}
                paginationModel={{ pageSize: 5, page: 0 }}
                slots={{ toolbar: GridToolbar }} 
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                    sx: { color: 'text.secondary' },
                  },
                }}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default OrdersSummary;
