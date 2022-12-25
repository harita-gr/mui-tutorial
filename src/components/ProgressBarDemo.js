import { CircularProgress, Box, LinearProgress } from "@mui/material";
import React from "react";

const ProgressBarDemo = () => {
  return (
    <Box>
      <CircularProgress variant="determinate" value={10}></CircularProgress>
      <CircularProgress variant="indeterminate"></CircularProgress>
      <LinearProgress variant="determinate" value={20}></LinearProgress>
    </Box>
  );
};

export default ProgressBarDemo;
