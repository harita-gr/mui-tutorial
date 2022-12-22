import React, { useState } from "react";
import { Box, Tab, TabPanel, Tabs } from "@mui/material";

const TabDemo = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <Tabs
        indicatorColor="secondary"
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <Tab label="First" />
        <Tab label="Second" />
        <Tab label="Third" />
      </Tabs>
    </div>
  );
};

export default TabDemo;
