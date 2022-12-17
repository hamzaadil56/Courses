import React from "react";
import Card from "./CourseCard";

const Courses = ({ courses }) => {
  courses = courses.slice(0, 3);
  return (
    <>
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </>
  );
};

export default Courses;
