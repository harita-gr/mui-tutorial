import { Container } from "@mui/material";
import React from "react";

const ContainerDemo = () => {
  return (
    <div>
      <Container sx={{ background: "green" }} maxWidth="xs">
        This is XS
      </Container>
      <Container sx={{ background: "blue" }} maxWidth="sm">
        This is SM
      </Container>
      <Container sx={{ background: "orange" }} maxWidth="md">
        This is MD
      </Container>
      <Container sx={{ background: "purple" }} maxWidth="lg">
        This is LG
      </Container>
      <Container sx={{ background: "yellow" }} maxWidth="xl">
        This is XL
      </Container>
    </div>
  );
};

export default ContainerDemo;
