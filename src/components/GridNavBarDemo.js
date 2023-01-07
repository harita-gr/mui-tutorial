import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./DrawerComp";

const PAGES = ["Products", "Services", "Contact Us", "About Us"];

const GridNavBarDemo = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar>
      <Toolbar>
        <Grid container sx={{ placeItems: "center" }}>
          <Grid item xs={2}>
            <ShoppingCartCheckoutIcon />
          </Grid>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              {" "}
              <Grid item xs={6}>
                <Tabs
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor="secondary"
                  sx={{ marginLeft: "auto" }}
                >
                  {PAGES.map((page, index) => (
                    <Tab label={page} key={index} />
                  ))}
                </Tabs>
              </Grid>
              {/* empty grid */}
              <Grid item sx={1} />
              <Grid item sx={3}>
                <Box display="flex">
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    color="secondary"
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ marginLeft: 1 }}
                    variant="outlined"
                    color="secondary"
                  >
                    Signup
                  </Button>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default GridNavBarDemo;
