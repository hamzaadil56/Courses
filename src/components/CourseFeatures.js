import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import TurnSharpRightRoundedIcon from "@mui/icons-material/TurnSharpRightRounded";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

export default function CourseFeatures() {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          listStyle: "none !important",
        }}
      >
        <ListItem
          className="list-item"
          style={{
            display: "flex",
            justifyContent: "space-between !important",
          }}
        >
          <ListItemAvatar>
            <ImportContactsRoundedIcon className="icons" />
          </ListItemAvatar>
          <ListItemText primary="Lectures" />
          <ListItemText className="list-item-text">0</ListItemText>
        </ListItem>
        <ListItem className="list-item">
          <ListItemAvatar>
            <QuizRoundedIcon className="icons" />
          </ListItemAvatar>
          <ListItemText primary="Quizes" />
          <ListItemText className="list-item-text">0</ListItemText>
        </ListItem>
        <ListItem className="list-item">
          <ListItemAvatar>
            <AccessTimeRoundedIcon className="icons" />
          </ListItemAvatar>
          <ListItemText primary="Duration" />
          <ListItemText className="list-item-text">54</ListItemText>
        </ListItem>
        <ListItem className="list-item">
          <ListItemAvatar>
            <TurnSharpRightRoundedIcon className="icons" />
          </ListItemAvatar>
          <ListItemText primary="Skill Level" />
          <ListItemText className="list-item-text">All Levels</ListItemText>
        </ListItem>
        <ListItem className="list-item">
          <ListItemAvatar>
            <AbcOutlinedIcon className="icons" />
          </ListItemAvatar>
          <ListItemText primary="Language" />
          <ListItemText className="list-item-text">English</ListItemText>
        </ListItem>
        <ListItem className="list-item">
          <ListItemAvatar>
            <SchoolOutlinedIcon className="icons" />
          </ListItemAvatar>
          <ListItemText primary="Students" />
          <ListItemText className="list-item-text">28</ListItemText>
        </ListItem>
        <ListItem className="list-item">
          <ListItemAvatar>
            <AssessmentOutlinedIcon className="icons" />
          </ListItemAvatar>
          <ListItemText primary="Assessments" />
          <ListItemText className="list-item-text">Yes</ListItemText>
        </ListItem>
      </List>
    </>
  );
}
