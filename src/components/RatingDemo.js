import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";

const RatingDemo = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Rating
        precision={0.5}
        defaultValue={1.5}
        value={value}
        size="large"
        onChange={(e, val) => setValue(val)}
      />
      <Typography>Rated {value !== undefined ? value : 0} stars</Typography>
    </Box>
  );
};

export default RatingDemo;
