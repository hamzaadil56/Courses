import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/reducer";

export default configureStore({
  reducer: {
    coursesState: coursesReducer,
  },
});
