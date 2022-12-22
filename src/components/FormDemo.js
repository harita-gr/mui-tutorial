import React, { useState } from "react";
import {
  Button,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

const FormDemo = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: undefined,
    gender: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page from refreshing
    console.log("INPUTS:", inputs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        name="name" //identifier
        value={inputs.name}
        onChange={handleChange}
        type={"text"}
        sx={{ margin: 3 }}
        placeholder="Name"
        variant="outlined"
      />
      <TextField
        name="email"
        value={inputs.email}
        onChange={handleChange}
        type={"email"}
        sx={{ margin: 3 }}
        placeholder="Email"
        variant="standard"
      />
      <TextField
        name="password"
        value={inputs.password}
        onChange={handleChange}
        type={"password"}
        sx={{ margin: 3 }}
        placeholder="Password"
        variant="filled"
      />
      <br />
      <div style={{ marginLeft: "25px", marginBottom: "20px" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe to Newsletter"
          />
        </FormGroup>
        <br />
        <br />

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={handleChange}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button type="submit" variant="contained" size="small">
        Submit
      </Button>
    </form>
  );
};

export default FormDemo;
