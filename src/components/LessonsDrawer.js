import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { List, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { sections } from "../data";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Drawer = () => {
  const isLessonCompleted = false;
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
        {sections.map((section) => (
          <ListItem
            key={section.number}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid var(--grey)",
            }}
          >
            <InsertDriveFileOutlinedIcon
              style={{ color: "var(--base-orange)" }}
            />
            <Typography>1.{section.number}</Typography>{" "}
            <ListItemText style={{ margin: "0.2rem " }}>
              Section# {section.number}
            </ListItemText>
            {isLessonCompleted ? (
              <CheckCircleIcon
                color="green"
                style={{
                  color: "green",
                }}
              />
            ) : (
              <RemoveRedEyeIcon
                style={{
                  color: "green",
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Drawer;
