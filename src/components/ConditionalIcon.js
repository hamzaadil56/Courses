import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Icon = ({ test }) => {
  if (test.completed) {
    return (
      <div>
        <CheckCircleIcon style={{ color: "green" }} />
      </div>
    );
  }
  if (test.seen) {
    return (
      <div>
        <RemoveRedEyeIcon style={{ color: "green" }} />
      </div>
    );
  }
  if (test.seen === false && test.isCompleted === false) {
    return <div> </div>;
  }
};
export default Icon;
