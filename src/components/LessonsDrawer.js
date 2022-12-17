import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { List, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { sections } from "../data";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

const Drawer = () => {
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
            2/7
          </Typography>
        </span>
      </Box>
      <List>
        {sections.map((sectionNumber) => (
          <ListItem
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid var(--grey)",
            }}
          >
            <InsertDriveFileOutlinedIcon
              style={{ color: "var(--base-orange)" }}
            />
            <Typography>1.{sectionNumber}</Typography>{" "}
            <ListItemText style={{ margin: "0.2rem " }}>
              Section# {sectionNumber}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Drawer;
