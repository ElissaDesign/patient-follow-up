import DataTable from "react-data-table-component";

export default function TableData({ columns, data, customStyles }) {
  return (
    <DataTable columns={columns} data={data} customStyles={customStyles} />
  );
}
