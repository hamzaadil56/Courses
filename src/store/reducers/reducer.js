import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../data";

const course =
  localStorage.getItem("course") !== null
    ? JSON.parse(localStorage.getItem("value"))
    : {};

export const counterSlice = createSlice({
  name: "courses",
  initialState: {
    courses: courses,
    course: course,
  },
  reducers: {
    addCourse: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.course = action.payload;
      localStorage.setItem("course", JSON.stringify(state.course));
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCourse, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
