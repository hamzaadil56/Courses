import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <Box sx={{ width: "20%", mr: 1 }}>
        <LinearProgress
          style={{ backgroundColor: "grey" }}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const { currentSectionNumber } = useSelector((state) => state.coursesState);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={currentSectionNumber} />
    </Box>
  );
}
