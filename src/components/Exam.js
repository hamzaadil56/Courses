import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { useState } from "react";

import TestDrawer from "./TestsDrawer";
import Quiz from "./Quiz";
const Exam = () => {
  const [isQuizStarted, setQuizStarted] = useState(false);
  const [time, setTime] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    setInterval(() => {
      setTime(time + 1);
    }, 1000);
  };
  return (
    <Box className="Exam-container">
      <Box className="study-header">
        <Box
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            borderBottom: "1px solid grey",
          }}
        >
          <Typography>Logo Area</Typography>{" "}
        </Box>
        <Box
          style={{
            width: "80%",
            backgroundColor: "#2196f3",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            padding: "1rem",
            color: "white",
          }}
        >
          <Typography>2 of 7 items</Typography>
        </Box>
      </Box>
      <Box style={{ width: "100%", display: "flex" }}>
        <TestDrawer quizStarted={isQuizStarted} />
        <Box className="test-container">
          <Typography style={{ margin: "2rem" }} variant="h4">
            {" "}
            Simple Test
          </Typography>
          {isQuizStarted ? (
            <Quiz time={time} />
          ) : (
            <>
              <Box
                style={{
                  display: "flex",
                  margin: "2rem",
                }}
              >
                <Box
                  className="flex-container"
                  style={{ marginRight: " 2rem" }}
                >
                  <ExtensionIcon
                    style={{
                      marginRight: " 1rem",
                      color: "var(--base-orange)",
                    }}
                  />{" "}
                  Questions
                </Box>
                <Box
                  style={{ marginRight: " 2rem" }}
                  className="flex-container"
                >
                  <WatchLaterIcon
                    style={{
                      marginRight: " 1rem",
                      color: "var(--base-orange)",
                    }}
                  />
                  Duration
                </Box>
                <Box
                  style={{ marginRight: " 2rem" }}
                  className="flex-container"
                >
                  <SignalCellularAltIcon
                    style={{
                      marginRight: " 1rem",
                      color: "var(--base-orange)",
                    }}
                  />
                  Passing Grade
                </Box>
              </Box>
              <Box style={{ margin: " 2rem" }}>
                <p>
                  We provide an awesome testing with many types of questions.
                  Making a test with those questions is never easier than that.
                  Enjoy!
                </p>
              </Box>
              <Box style={{ margin: "2rem" }}>
                <Button
                  onClick={() => {
                    startQuiz();
                  }}
                  style={{
                    backgroundColor: "var(--base-orange)",
                    color: "black",
                    fontWeight: "bold",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    margin: "0 auto",
                    width: "20%",
                  }}
                >
                  Start
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Exam;
