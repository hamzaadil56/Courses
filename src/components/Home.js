import React from "react";
import { Box } from "@mui/material";
import { courses } from "../data";
import CoursesTable from "./CoursesTable";
import Courses from "./Courses";

const Home = () => {
  return (
    <div>
      <Box className="container flex-container courses-container">
        <Courses courses={courses} />
      </Box>
      <Box className="container">
        <CoursesTable />
      </Box>
    </div>
  );
};

export default Home;
