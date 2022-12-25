import { Box, Alert } from "@mui/material";
import React, { useState } from "react";

const AlertDemo = () => {
  const [show, setShow] = useState(true);

  return (
    <Box>
      <Alert severity="info">This is an alert!</Alert>
      <Alert severity="warning">This is an alert!</Alert>
      {show && (
        <Alert onClose={() => setShow(false)} severity="error">
          This is an alert!
        </Alert>
      )}
      <Alert severity="success">This is an alert!</Alert>
    </Box>
  );
};

export default AlertDemo;
