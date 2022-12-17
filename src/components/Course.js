import { Avatar } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import CourseTabs from "./CourseTabs";
import CourseFeatures from "./CourseFeatures";

const Course = () => {
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.coursesState);
  const params = useParams();
  return (
    <Box className="container">
      <Typography variant="h2">{params.keyword}</Typography>
      <section>
        <Box
          style={{ width: "20%", justifyContent: "space-around" }}
          className="flex-container details-container"
        >
          <Avatar src={"../images/avatar.png"} />
          <Box>
            <Typography variant="h6">HeadofDeptm</Typography>
            <Typography variant="h6">User#</Typography>
          </Box>
        </Box>
        <Box className="flex-container details-container">
          <Typography variant="h6">Department</Typography>
          <Typography variant="h6">All-HR-Finance</Typography>
        </Box>
        <Box className="flex-container details-container">
          <Typography variant="h6">Review</Typography>
          <Rating
            style={{ color: "yellow" }}
            name="read-only"
            value={0}
            readOnly
          />
        </Box>
        <Box
          style={{ width: "20%", justifyContent: "space-around" }}
          className="flex-container"
        >
          <Button
            onClick={() => navigate(`/course/${params.keyword}/study`)}
            variant="contained"
          >
            Study
          </Button>
          <Button variant="outlined">Exam</Button>
        </Box>
      </section>
      <Box className="container">
        <img className="image" src={`.${course.image}`} alt="" />
      </Box>
      <CourseTabs />
      <Box className="description-container">
        <Box style={{ width: "60%" }}>
          <Box>
            <article>
              <Typography className="typography" variant="h6">
                COURSE DESCRIPTION
              </Typography>
              <Typography className="typography" variant="p" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ipsum ullam accusantium, at itaque aperiam explicabo in suscipit
                ducimus repellendus enim. Temporibus, quis. Pariatur sequi natus
                ea, modi exercitationem dolorum voluptates minima consequuntur
                provident eum cumque perspiciatis consectetur ipsum magnam
                soluta harum quo enim voluptatibus libero cum itaque unde velit.
              </Typography>
            </article>
            <article>
              <Typography className="typography" variant="h6">
                CERTIFICATION
              </Typography>
              <Typography className="typography" variant="p" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ipsum ullam accusantium, at itaque aperiam explicabo in suscipit
                ducimus repellendus enim. Temporibus, quis. Pariatur sequi natus
                ea, modi exercitationem dolorum voluptates minima consequuntur
                provident eum cumque perspiciatis consectetur ipsum magnam
                soluta harum quo enim voluptatibus libero cum itaque unde velit.
              </Typography>
            </article>
            <article>
              <Typography className="typography" variant="h6">
                LEARNING OUTCOMES
              </Typography>
              <Typography className="typography" variant="p" component="p">
                <ul>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic, id?
                  </li>
                </ul>
              </Typography>
            </article>
          </Box>
        </Box>
        <Box
          className="features-list"
          style={{
            width: "40%",
            margin: "1rem 4rem",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={{ margin: "1rem" }} variant="h4">
            Course Features
          </Typography>
          <CourseFeatures />
        </Box>
      </Box>
    </Box>
  );
};

export default Course;
