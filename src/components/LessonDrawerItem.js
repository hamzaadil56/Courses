import React from "react";
import { ListItem, Typography, ListItemText } from "@mui/material";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ConditionalIcon from "./ConditionalIcon";
import { nextSection } from "../store/reducers/reducer";
import { useDispatch } from "react-redux";

const LessonDrawerItem = ({ section, isActive }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      onClick={() => {
        dispatch(nextSection(section.number));
      }}
      key={section.number}
      className="drawer-item"
      style={
        isActive
          ? { backgroundColor: "var(--grey)", color: "white" }
          : {
              backgroundColor: "white",
            }
      }
    >
      <InsertDriveFileOutlinedIcon style={{ color: "var(--base-orange)" }} />
      <Typography>1.{section.number + 1}</Typography>{" "}
      <ListItemText style={{ margin: "0.2rem " }}>{section.title}</ListItemText>
      <ConditionalIcon test={section} />
    </ListItem>
  );
};

export default LessonDrawerItem;
