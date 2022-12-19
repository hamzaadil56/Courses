import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { courses } from "../data";
import { Rating } from "@mui/material";

const columns = [
  {
    field: "image",
    headerName: "Image Course",
    minWidth: 110,

    renderCell: (params) => {
      return (
        <>
          {courses
            .filter((course) => {
              return course.id === params.row.id;
            })
            .map((course) => (
              <div key={course.id}>
                <img alt={course.title} width="40px" src={course.image} />
              </div>
            ))}
        </>
      );
    },
  },

  { field: "title", headerName: "Title Course", width: 230 },
  {
    field: "rate",
    headerName: "Rate",
    width: 230,
    renderCell: (params) => {
      return (
        <>
          {courses
            .filter((course) => {
              return course.id === params.row.id;
            })
            .map((course) => (
              <Rating
                key={course.id}
                name="read-only"
                value={course.rating}
                readOnly
              />
            ))}
        </>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
];

// const rows = [
//   { id: 1, image: 1, title: "Snow", rate: "Jon", date: 35 },
//   { id: 2, image: 2, title: "Snow", rate: "Jon", date: 35 },
// ];
const rows = courses.map((course) => {
  return {
    id: course.id,
    title: course.title,
    rate: course.rating,
    date: course.date,
  };
});

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
