import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  // TEST THE API

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newData: any) => {
      return fetch(`http://localhost:8800/api/${props.slug}s`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(newData),
        body: JSON.stringify({
          id: 3,
          firstName: "demo",
          companyName: "Tech Solutions",
          email: "hubbard@gmail.com",
          phone: "423 452 729",
          verified: false,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    mutation.mutate();
    props.setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>

                {/* Check if the column type is boolean */}
                {column.type === "boolean" ? (
                  <select className="select-container" required>
                    <option value="">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                ) : (
                  <input
                    type={column.type}
                    placeholder={column.field}
                    required
                  />
                )}
              </div>
            ))}
          <div className="add-btn">
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
