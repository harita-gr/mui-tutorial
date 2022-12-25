import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AccordionDemo = () => {
  const [accordion, setAccordion] = useState("");

  return (
    <Box>
      <Accordion
        expanded={accordion === "test1"}
        onChange={() => setAccordion("test1")}
      >
        <AccordionSummary expandIcon={">"}>
          <Typography>My Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>My name is Harry. I am a web developer</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordion === "test2"}
        onChange={() => setAccordion("test2")}
      >
        <AccordionSummary expandIcon={">"}>
          <Typography>My Details 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>My name is Harry. I am a web developer</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionDemo;
