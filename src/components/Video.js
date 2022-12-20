import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  completeSection,
  prevSection,
  nextSection,
} from "../store/reducers/reducer";
import { useDispatch } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";

const Video = () => {
  const dispatch = useDispatch();
  return (
    <Box style={{ margin: "2rem" }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zJSY8tbf_ys"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Box
        className="section-description"
        style={{
          margin: "2rem 0",
          textAlign: "justify",
          fontSize: "1.2vw",
          width: "80%",
        }}
      >
        <Typography style={{ fontWeight: "bold" }} variant="h5">
          How to use LearnPress
        </Typography>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            magni?
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero
            obcaecati provident officia molestias ullam blanditiis dicta, culpa
            explicabo sed nihil. Laborum nesciunt possimus a quas fugit harum
            eveniet sit.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ducimus sunt libero provident maxime deleniti praesentium
            recusandae, reiciendis soluta unde!
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            facilis! Perspiciatis reprehenderit rerum illum sed animi! Porro
            minus laborum quasi distinctio! Consequatur quasi, autem aliquam ut
            dignissimos error. Labore, inventore expedita! Totam iure laboriosam
            iste ratione dolores at laudantium quo temporibus sequi? Libero,
            amet praesentium?
          </p>
        </article>
      </Box>
      <Box>
        <Button
          onClick={() => dispatch(completeSection())}
          style={{
            backgroundColor: "var(--base-orange)",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <DoneIcon /> Completed
        </Button>
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <Button
          onClick={() => dispatch(prevSection())}
          style={{
            backgroundColor: "none",
            color: "black",
            textTransform: "capitalize",
            padding: "0 !important",
          }}
        >
          <KeyboardArrowLeftIcon />
          Prev
        </Button>
        <Button
          onClick={() => dispatch(nextSection())}
          style={{
            backgroundColor: "none",
            color: "black",
            textTransform: "capitalize",
          }}
        >
          <KeyboardArrowRightIcon /> Next
        </Button>
      </Box>
    </Box>
  );
};

export default Video;
