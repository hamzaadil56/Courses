import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCourse } from "../store/reducers/reducer";

export default function CourseCard({ course }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, height: 350, width: 300, margin: 2 }}>
      <CardActionArea
        onClick={() => {
          dispatch(addCourse(course));
          navigate(`/course/${course.title}`);
        }}
      >
        <CardMedia
          className="card-media"
          component="img"
          alt="green iguana"
          height="200"
          image={course.image}
          style={{ objectFit: "cover" }}
        />

        <CardContent className="card-content">
          <div className="avatar-box">
            <img
              width={"10%"}
              className="avatar"
              src="./images/avatar.png"
              alt=""
            />
          </div>
          <Typography
            style={{ marginTop: "1rem 0", textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {course.title}
          </Typography>
          <div className="grey-outline"></div>
          <Box className="flex-container rating-box">
            <div className="flex-container">
              <RepeatRoundedIcon /> {course.repeated}
            </div>
            <div className="flex-container">
              <p>PT:</p>
              <Rating name="read-only" value={course.rating} readOnly />
            </div>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
