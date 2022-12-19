import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { questions } from "../data";
import Pagination from "react-js-pagination";

function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<CheckCircleOutlineIcon style={{ color: "green" }} />}
      {...props}
    />
  );
}

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const setCurrentPageNo = (e) => {
    setQuestionNumber(e);
  };

  return (
    <Box className="quiz-container">
      <Box
        className="flex-container"
        style={{
          justifyContent: "space-between",
          backgroundColor: "var(--base-orange)",

          padding: "1rem",
        }}
      >
        <Box>
          <h4>Question {questionNumber} of 4</h4>
        </Box>
        <Box>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              margin: "0 0.5rem",
            }}
          >
            time
          </Button>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              margin: "0 1rem",
            }}
          >
            Finish Quiz
          </Button>
        </Box>
      </Box>
      <Box>
        <FormControl className="form">
          {questions.map((question, index) => (
            <Box
              className={
                question.number === questionNumber
                  ? "active-question"
                  : "question"
              }
              key={index}
            >
              <FormLabel style={{ color: "black" }} id="demo-customized-radios">
                {question.number}. {question.question}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
              >
                <FormControlLabel
                  className="input-label"
                  value={question.options.A}
                  control={<BpRadio />}
                  label={capitalize(question.options.A)}
                />
                <FormControlLabel
                  className="input-label"
                  value={question.options.B}
                  control={<BpRadio />}
                  label={capitalize(question.options.B)}
                />
              </RadioGroup>{" "}
            </Box>
          ))}

          {/* <FormLabel style={{ color: "black" }} id="demo-customized-radios">
            1. True or False Question: A rose is red?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
          >
            <FormControlLabel
              className="input-label"
              value="yes"
              control={<BpRadio />}
              label="Yes"
            />
            <FormControlLabel
              className="input-label"
              value="no"
              control={<BpRadio />}
              label="No"
            />
          </RadioGroup> */}
          <Box
            style={{
              margin: "0 auto",
              padding: "0 auto !important",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                border: "1px solid var(--material-ui-pri)",
                fontWeight: "bold",
                margin: "0 1rem",
              }}
            >
              Save Answer
            </Button>
            <Button
              style={{
                fontWeight: "bold",
                backgroundColor: "var(--material-ui-pri)",
                color: "white",
                margin: "0 1rem",
              }}
            >
              Submit Exam
            </Button>
          </Box>

          <Box className="paginationBox">
            <Pagination
              activePage={questionNumber}
              itemsCountPerPage={1}
              totalItemsCount={questions.length}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Quiz;
