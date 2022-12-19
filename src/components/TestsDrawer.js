import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { List, Typography } from "@mui/material";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import { tests } from "../data";
import TestDrawerItem from "./TestDrawerItem";
// import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TestDrawer = () => {
  return (
    <Box
      style={{ padding: "0.5rem", height: "100vh" }}
      className="drawer-container"
    >
      <Box
        className="drawer"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          borderBottom: "1px solid var(--grey)",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        <KeyboardArrowDownIcon />
        <span>
          <Typography variant="p">LEARNPRESS GETTING STARTED</Typography>
          <Typography
            style={{ color: "var(--base-orange)", fontWeight: "bold" }}
            margin={"0 2rem  "}
            variant="p"
          >
            3/7
          </Typography>
        </span>
      </Box>
      <List>
        {tests.map((test) => (
          <TestDrawerItem key={test.number} section={test} />
        ))}
      </List>
    </Box>
  );
};

export default TestDrawer;
