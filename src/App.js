import "./App.css";
import { Typography } from "@mui/material";

import ButtonDemo from "./components/ButtonDemo";
import FormDemo from "./components/FormDemo";
import Header from "./components/Header";
import TextFieldDemo from "./components/TextFieldDemo";
import BoxDemo from "./components/BoxDemo";
import CardDemo from "./components/CardDemo";
import TabDemo from "./components/TabDemo";
import MenuDemo from "./components/MenuDemo";
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
        <br /> <br />
        <Typography variant="h4">Box</Typography>
        <BoxDemo />
        <br /> <br />
        <Typography variant="h4">Card</Typography>
        <CardDemo />
        <br /> <br />
        <Typography variant="h4">Tabs</Typography>
        <TabDemo />
        <br /> <br />
        <Typography variant="h4">Menu</Typography>
        <MenuDemo />
      </div>
    </div>
  );
}

export default App;
