import React from "react";
import { Box } from "@mui/system";
import LessonsDrawer from "./LessonsDrawer";
import Video from "./Video";
import Header from "./Header";
const Study = () => {
  return (
    <Box className="study-container">
      <Header />

      <Box className="exam-box" style={{ width: "100%", display: "flex" }}>
        <LessonsDrawer />
        <Video />
      </Box>
    </Box>
  );
};

export default Study;
