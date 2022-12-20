import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ExamProgressBar from "./ExamProgressBar";
const Header = () => {
  const { currentTestNumber, tests } = useSelector(
    (state) => state.coursesState
  );
  return (
    <Box className="study-header">
      <Box
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          borderBottom: "1px solid grey",
        }}
      >
        <Typography>Logo Area</Typography>{" "}
      </Box>
      <Box
        style={{
          width: "80%",
          backgroundColor: "#2196f3",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "1rem",
          color: "white",
        }}
      >
        <ExamProgressBar />
        <Typography>
          {currentTestNumber} of {tests.length} items
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
