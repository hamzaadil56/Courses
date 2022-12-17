import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Video = () => {
  return (
    <Box style={{ margin: "2rem" }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zJSY8tbf_ys"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Box>
        <Typography variant="h4">How to use LearnPress</Typography>
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
      </Box>
    </Box>
  );
};

export default Video;
