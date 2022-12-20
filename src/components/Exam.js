import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { useState } from "react";
import { useDispatch } from "react-redux";

import TestDrawer from "./TestsDrawer";
import Quiz from "./Quiz";
import ExamHeader from "./ExamHeader";
import { completeInstructions } from "../store/reducers/reducer";
const Exam = () => {
  const [isQuizStarted, setQuizStarted] = useState(false);

  const [time, setTime] = useState(0);

  const dispatch = useDispatch();
  const startQuiz = () => {
    dispatch(completeInstructions());
    setQuizStarted(true);
    setInterval(() => {
      setTime(time + 1);
    }, 1000);
  };
  return (
    <Box className="Exam-container">
      <ExamHeader />
      <Box className="exam-box" style={{ width: "100%", display: "flex" }}>
        <TestDrawer />
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
                  Questions : 4
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
                  Duration : 00:10:00
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
                  Passing Grade : 80%
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
