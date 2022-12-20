import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const AppBarDemo = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Button color="error">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarDemo;
