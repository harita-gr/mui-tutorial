import {
  Drawer,
  ListItemButton,
  List,
  ListItemText,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const arrOptions = ["Profile", "Balance", "Logout"];

const DrawerDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>OPEN</Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          {arrOptions.map((elm) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={elm} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerDemo;
