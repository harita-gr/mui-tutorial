import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Box,
  Collapse,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const array = ["First", "Second", "Third"];

const ListDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box>
        <List sx={{ width: 300, background: "grey" }}>
          {array.map((listElm) => (
            <ListItem divider>
              <ListItemButton>
                {/* <ListItemIcon>{"$"}</ListItemIcon> */}
                <ListItemText primary={listElm} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography>Nested List</Typography>
      <Box>
        <List>
          <ListItem divider>
            <ListItemButton onClick={() => setOpen(!open)}>
              <ListItemIcon>{">"}</ListItemIcon>
              <ListItemText primary={"Expand List"} />
            </ListItemButton>
          </ListItem>
          <Collapse in={open}>
            <List sx={{ width: 300, background: "grey" }}>
              {array.map((listElm) => (
                <ListItem divider>
                  <ListItemButton>
                    <ListItemText primary={listElm} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );
};

export default ListDemo;
