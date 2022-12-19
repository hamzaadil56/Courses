import "./App.css";

import Course from "./components/Course";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Study from "./components/Study";
import Exam from "./components/Exam";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/course/:keyword" element={<Course />} />
        <Route exact path="/course/:keyword/study" element={<Study />} />
        <Route exact path="/course/:keyword/exam" element={<Exam />} />
        <Route exact path="/course/:keyword/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
