import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../data";
import { questions } from "../../data";
import { tests } from "../../data";
import { sections } from "../../data";

const course =
  localStorage.getItem("course") !== null
    ? JSON.parse(localStorage.getItem("value"))
    : {};
// const section =
//   localStorage.getItem("section") !== null
//     ? JSON.parse(localStorage.getItem("value"))
//     : {};
// const test =
//   localStorage.getItem("test") !== null
//     ? JSON.parse(localStorage.getItem("value"))
//     : {};

export const counterSlice = createSlice({
  name: "courses",
  initialState: {
    courses: courses,
    course: course,
    score: 0,
    currentSectionNumber: 0,
    userAnswers: [],
    tests: tests,
    sections: sections,
    currentTestNumber: 0,
    currentSection: {},
    currentTest: {},
  },
  reducers: {
    addCourse: (state, action) => {
      state.course = action.payload;
      localStorage.setItem("course", JSON.stringify(state.course));
    },
    addAnswer: (state, action) => {
      state.userAnswers = action.payload;
      state.userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          state.score += 1;
        }
      });
    },
    calculateScore: (state) => {
      state.userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          state.score += 1;
        }
      });
      return;
    },
    completeInstructions: (state) => {
      state.tests[0].completed = true;
      state.currentTestNumber += 1;
    },
    setTest: (state, action) => {
      if (state.currentTestNumber < state.tests.length) {
        state.tests[state.currentTestNumber].seen = true;
        state.currentTestNumber = action.payload;
      }
    },
    completeTest: (state) => {
      if (state.currentTestNumber < state.tests.length) {
        state.tests[state.currentTestNumber].completed = true;
      }
    },
    completeSection: (state) => {
      if (state.currentSectionNumber < state.sections.length) {
        state.sections[state.currentSectionNumber].completed = true;
      }
    },
    prevSection: (state) => {
      if (state.currentSectionNumber > 0) {
        state.currentSectionNumber -= 1;
      }
    },
    setSection: (state, action) => {
      state.currentSectionNumber = action.payload;
    },
    nextSection: (state, action) => {
      if (state.currentSectionNumber < state.sections.length) {
        state.sections[state.currentSectionNumber].seen = true;
        state.currentSectionNumber += 1;
      }
      if (state.currentSectionNumber === state.sections.length) {
        state.currentSectionNumber = state.sections.length - 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCourse,
  addAnswer,
  completeInstructions,
  completeTest,
  completeSection,
  nextSection,
  setTest,
  prevSection,
  setSection,
} = counterSlice.actions;

export default counterSlice.reducer;
