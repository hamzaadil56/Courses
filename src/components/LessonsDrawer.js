import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { List, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LessonDrawerItem from "./LessonDrawerItem";

const Drawer = () => {
  const { sections, currentSectionNumber } = useSelector(
    (state) => state.coursesState
  );
  console.log(currentSectionNumber);
  return (
    <Box
      style={{ padding: "0.5rem", height: "100vh" }}
      className="drawer-container "
    >
      <Box
        className="drawer "
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
            2/7
          </Typography>
        </span>
      </Box>
      <List>
        {sections.map((section) => (
          <LessonDrawerItem
            isActive={currentSectionNumber === section.number}
            key={section.number}
            section={section}
          />
        ))}
      </List>
    </Box>
  );
};

export default Drawer;
