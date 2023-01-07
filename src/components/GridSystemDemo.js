import { Box, Grid } from "@mui/material";
import React from "react";

const GridSystemDemo = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} sx={{ background: "yellow" }}>
          Item
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ background: "purple" }}>
          Item
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridSystemDemo;
