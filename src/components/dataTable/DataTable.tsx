import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  getRowId: (row: object) => number;
};

const DataTable = (props: Props) => {

  // TEST THE API

  const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: (id: number) => {
  //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  //       method: "delete",
  //     });
  //   },
  //   onSuccess: ()=>{
  //     queryClient.invalidateQueries([`all${props.slug}`]);
  //   }
  // });

  const handleDelete = (id: number) => {
    console.log(`Deleting item with id: ${id}`);
    //delete the item
    mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        getRowId={props.getRowId} 
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5,10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
