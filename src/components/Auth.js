import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const resetState = () => {
    setIsSignUp(!isSignUp);
    setInputs({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignUp ? "Signup" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              margin="normal"
              type="text"
              variant="outlined"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          )}

          <TextField
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            type="password"
            variant="outlined"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            type="submit"
          >
            {isSignUp ? "Signup" : "Login"}
          </Button>
          <Button sx={{ marginTop: 3, borderRadius: 3 }} onClick={resetState}>
            Change to {isSignUp ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
