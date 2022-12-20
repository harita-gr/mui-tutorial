import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

const TextFieldDemo = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        type={"text"}
        sx={{ margin: 3 }}
        placeholder="Name"
        variant="outlined"
      />
      <Typography>{name}</Typography>

      <TextField
        type={"email"}
        sx={{ margin: 3 }}
        placeholder="Email"
        variant="standard"
      />
      <TextField
        type={"password"}
        sx={{ margin: 3 }}
        placeholder="Password"
        variant="filled"
      />
    </div>
  );
};

export default TextFieldDemo;
