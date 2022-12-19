import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { List, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TestDrawerItem from "./TestDrawerItem";

const TestDrawer = () => {
  const { currentTestNumber, tests } = useSelector(
    (state) => state.coursesState
  );
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
          <TestDrawerItem
            isActive={currentTestNumber === test.number}
            key={test.number}
            test={test}
          />
        ))}
      </List>
    </Box>
  );
};

export default TestDrawer;
