import React from "react";
import Header from "./Header";
import { Box, Button, List, ListItem, Rating, Typography } from "@mui/material";
import CoursesTable from "./CoursesTable";
import ResultDrawer from "./ResultDrawer";

const Result = () => {
  return (
    <Box>
      <Header />
      <Box className="exam-box" style={{ width: "100%", display: "flex" }}>
        <ResultDrawer />
        <Box
          className="result-parent"
          style={{ width: "70%", display: "flex" }}
        >
          <Box className="result-container ">
            <Typography variant="h4">TEST TITLE...</Typography>
            <Box className="result-circle">
              <Typography
                style={{ borderBottom: "2px solid var(--grey)" }}
                variant="h6"
              >
                0%
              </Typography>
              <Typography variant="h6">80%</Typography>
            </Box>
            <Box
              style={{
                backgroundColor: "red",
                padding: "0.5rem",
                color: "white",
                width: "70%",
                textAlign: "center",
              }}
              className="result-box"
            >
              <Typography variant="h5">Failed</Typography>
            </Box>
            <Box className="result-container">
              <List>
                <ListItem className="result-list-item">
                  <Typography variant="h6">Time Spent</Typography>
                  <Typography variant="h5">00:02:30</Typography>
                </ListItem>
                <ListItem className="result-list-item">
                  <Typography variant="h6">Points</Typography>
                  <Typography variant="h5">0/4</Typography>
                </ListItem>
                <ListItem className="result-list-item">
                  <Typography variant="h6">Questions</Typography>
                  <Typography variant="h5">4</Typography>
                </ListItem>
                <ListItem className="result-list-item">
                  <Typography variant="h6">Correct</Typography>
                  <Typography variant="h5">0</Typography>
                </ListItem>
                <ListItem className="result-list-item">
                  <Typography variant="h6">Wrong</Typography>
                  <Typography variant="h5">1</Typography>
                </ListItem>
                <ListItem className="result-list-item">
                  <Typography variant="h6">Skipped</Typography>
                  <Typography variant="h5">3</Typography>
                </ListItem>
                <ListItem className="result-list-item">
                  <Typography variant="h6">Rate</Typography>
                  <Rating name="read-only" value={3} readOnly />
                </ListItem>
              </List>
              <Button
                style={{
                  backgroundColor: "var(--base-orange)",
                  color: "black",
                  padding: "1rem",
                }}
              >
                Retake (10)
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <CoursesTable />
    </Box>
  );
};

export default Result;
