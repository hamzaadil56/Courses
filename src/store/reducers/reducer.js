import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../data";
import { sections } from "../../data";

const course =
  localStorage.getItem("course") !== null
    ? JSON.parse(localStorage.getItem("value"))
    : {};
const section =
  localStorage.getItem("section") !== null
    ? JSON.parse(localStorage.getItem("value"))
    : {};
export const counterSlice = createSlice({
  name: "courses",
  initialState: {
    courses: courses,
    course: course,
    section: section,
  },
  reducers: {
    addCourse: (state, action) => {
      state.course = action.payload;
      localStorage.setItem("course", JSON.stringify(state.course));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCourse, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
