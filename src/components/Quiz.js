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
import CountDownTimer from "./CountDown_Timer";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { addAnswer, completeTest, setTest } from "../store/reducers/reducer";

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
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [questionNumber, setQuestionNumber] = useState(1);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const setCurrentPageNo = (e) => {
    setQuestionNumber(e);
    dispatch(setTest(e));
  };
  const saveAnswer = () => {
    dispatch(completeTest());
  };
  console.log(userAnswers);
  // const calculateScore = () => {
  //   usersAnswers.forEach((answer, index) => {
  //     if (answer === questions[index].answer) {
  //       score += 1;
  //     }
  //   });
  //   return score;
  // };

  // useEffect(() => {
  //   calculateScore();
  // }, [usersAnswers]);

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
        <Box className="flex-container">
          <CountDownTimer userAnswers={userAnswers} />
          <Button
            onClick={handleOpen}
            className="btn "
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
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUserAnswers([...userAnswers, e.target.value]);
                    // dispatch(addAnswer(e.target.value));
                  }}
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

          <Box
            style={{
              margin: "0 auto",
              padding: "0 auto !important",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                saveAnswer();
              }}
              style={{
                border: "1px solid var(--material-ui-pri)",
                fontWeight: "bold",
                margin: "0 1rem",
              }}
            >
              Save Answer
            </Button>
            {open && (
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    backgroundColor: "white",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    textAlign={"center"}
                  >
                    Are you sure to submit quiz?
                  </Typography>
                  <Box
                    style={{
                      margin: "1rem",
                    }}
                    className="flex-container"
                  >
                    <Button
                      style={{
                        backgroundColor: "var(--base-orange)",
                        color: "black",
                        margin: "0 1rem",
                        fontWeight: "bold",
                      }}
                      onClick={handleClose}
                    >
                      CANCEL
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "var(--base-orange)",
                        color: "black",
                        fontWeight: "bold",
                        margin: "0 1rem",
                      }}
                      onClick={() => {
                        dispatch(addAnswer(userAnswers));
                        navigate(`/course/${params.keyword}/result`);
                      }}
                    >
                      OK
                    </Button>
                  </Box>
                </Box>
              </Modal>
            )}
            <Button
              onClick={handleOpen}
              type="submit"
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
