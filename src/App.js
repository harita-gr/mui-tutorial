import "./App.css";
import { Typography } from "@mui/material";

import ButtonDemo from "./components/ButtonDemo";
import FormDemo from "./components/FormDemo";
import Header from "./components/Header";
import TextFieldDemo from "./components/TextFieldDemo";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: "100px" }}>
        <Typography variant="h4">Button</Typography>
        <ButtonDemo />
        <Typography variant="h4">TextField</Typography>
        <TextFieldDemo />
        <Typography variant="h4">Form</Typography>
        <FormDemo />
      </div>
    </div>
  );
}

export default App;
