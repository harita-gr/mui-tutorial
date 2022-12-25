import { Box, Snackbar, Button, Alert } from "@mui/material";
import React, { useState } from "react";

const SnackbarDemo = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Button></Button>
      {/* <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="This is a snackbar"
      /> */}
      {/* Using alert inside snackbar */}
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
      >
        <Alert severity="success">This is a success message</Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackbarDemo;
