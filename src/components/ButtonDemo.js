import React from "react";
import { Button } from "@mui/material";

const ButtonDemo = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        sx={{ margin: 3 }}
        color="success"
        onClick={() => alert("Button clicked!")}
      >
        FIRST
      </Button>
      <Button
        variant="outlined"
        size="medium"
        sx={{ margin: 3 }}
        color="warning"
        onClick={() => alert("Button clicked!")}
      >
        SECOND
      </Button>
      <Button
        variant="text"
        size="small"
        sx={{ margin: 3 }}
        color="info"
        onClick={() => alert("Button clicked!")}
      >
        THIRD
      </Button>
    </div>
  );
};

export default ButtonDemo;
