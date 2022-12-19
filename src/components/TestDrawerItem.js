import React, { useState } from "react";
import { ListItem, Typography, ListItemText } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

const DrawerItem = ({ section }) => {
  return (
    <ListItem
      key={section.number}
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid var(--grey)",
      }}
    >
      <InsertDriveFileOutlinedIcon style={{ color: "var(--base-orange)" }} />
      <Typography>1.{section.number}</Typography>{" "}
      <ListItemText style={{ margin: "0.2rem " }}>{section.title}</ListItemText>
      {section.completed ? (
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
  );
};

export default DrawerItem;
