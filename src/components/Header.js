import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
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
          justifyContent: "end",
          alignItems: "center",
          padding: "1rem",
          color: "white",
        }}
      >
        <Typography>2 of 7 items</Typography>
      </Box>
    </Box>
  );
};

export default Header;
