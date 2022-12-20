import { Box } from "@mui/material";
import React, { useState, useRef, useEffect, useCallback } from "react";
import TimerIcon from "@mui/icons-material/Timer";
import { addAnswer } from "../store/reducers/reducer";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CountDownTimer = ({ userAnswers }) => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const clearTimer = useCallback(
    (e) => {
      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next
      setTimer("10:00");
      const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        console.log(total, hours, minutes, seconds);
        if (total >= 0) {
          // update the timer
          // check if less than 10 then we need to
          // add '0' at the beginning of the variable
          setTimer(
            (minutes > 9 ? minutes : "0" + minutes) +
              ":" +
              (seconds > 9 ? seconds : "0" + seconds)
          );
        }
        if (minutes === 0 && seconds === 0) {
          dispatch(addAnswer(userAnswers));
          navigate(`/course/${params.keyword}/result`);
        }
      };
      // If you try to remove this line the
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    },
    [dispatch, navigate, params.keyword, userAnswers]
  );

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setMinutes(deadline.getMinutes() + 10);

    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, [clearTimer]);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button

  return (
    <Box
      style={{
        backgroundColor: "white",
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
      }}
      className="CountDown_Timer"
    >
      <TimerIcon />
      <h2>{timer}</h2>
    </Box>
  );
};

export default CountDownTimer;
