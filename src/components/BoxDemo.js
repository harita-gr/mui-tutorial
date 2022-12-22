import { Typography, Box, styled } from "@mui/material";
import React from "react";

const CustomizedTypography = styled(Typography)`
  color: #000055;

  :hover {
    color: #75125c;
  }
`;
const BoxDemo = () => {
  return (
    <Box>
      <CustomizedTypography variant="h1">Hello World</CustomizedTypography>
    </Box>
  );
};

export default BoxDemo;
