import { Link } from "@mui/material";
import React from "react";

const LinkDemo = () => {
  return (
    <div>
      <Link
        variant="h6"
        underline="none"
        color="secondary"
        href="https://www.google.com"
      >
        Visit Google
      </Link>
    </div>
  );
};

export default LinkDemo;
