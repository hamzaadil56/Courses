import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import LessonsDrawer from "./LessonsDrawer";
import Video from "./Video";
const Study = () => {
  return (
    <Box className="study-container">
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
            justifyContent: "end",
            alignItems: "center",
            padding: "1rem",
            color: "white",
          }}
        >
          <Typography>2 of 7 items</Typography>
        </Box>
      </Box>
      <Box style={{ width: "100%", display: "flex" }}>
        <LessonsDrawer />
        <Video />
      </Box>
    </Box>
  );
};

export default Study;
