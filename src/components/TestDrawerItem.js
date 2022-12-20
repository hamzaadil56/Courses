import React from "react";
import { ListItem, Typography, ListItemText } from "@mui/material";

import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ConditionalIcon from "./ConditionalIcon";

const DrawerItem = ({ test, isActive }) => {
  return (
    <ListItem
      className="drawer-item"
      key={test.number}
      style={
        isActive
          ? {
              backgroundColor: "var(--grey)",
              color: "white",
              cursor: "pointer",
            }
          : {
              backgroundColor: "white",
              cursor: "pointer",
            }
      }
    >
      <InsertDriveFileOutlinedIcon style={{ color: "var(--base-orange)" }} />
      <Typography>1.{test.number}</Typography>{" "}
      <ListItemText style={{ margin: "0.2rem " }}>{test.title}</ListItemText>
      <ConditionalIcon test={test} />
    </ListItem>
  );
};

export default DrawerItem;
