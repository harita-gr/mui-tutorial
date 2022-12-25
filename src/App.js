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
import DialogDemo from "./components/DialogDemo";
import LinkDemo from "./components/LinkDemo";
import ContainerDemo from "./components/ContainerDemo";
import SnackbarDemo from "./components/SnackbarDemo";
import ProgressBarDemo from "./components/ProgressBarDemo";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: "100px" }}>
        <Typography variant="h4">Button</Typography>
        <ButtonDemo />
        <Typography variant="h4">Link</Typography>
        <LinkDemo />
        <Typography variant="h4">TextField</Typography>
        <TextFieldDemo />
        <Typography variant="h4">Form</Typography>
        <FormDemo />
        <br /> <br />
        <Typography variant="h4">Box</Typography>
        <BoxDemo />
        <br /> <br />
        <Typography variant="h4">Container</Typography>
        <ContainerDemo />
        <br /> <br />
        <Typography variant="h4">Card</Typography>
        <CardDemo />
        <br /> <br />
        <Typography variant="h4">Tabs</Typography>
        <TabDemo />
        <br /> <br />
        <Typography variant="h4">Menu</Typography>
        <MenuDemo />
        <br /> <br />
        <Typography variant="h4">Dialog</Typography>
        <DialogDemo />
        <br /> <br />
        <Typography variant="h4">Snackbar</Typography>
        <SnackbarDemo />
        <br /> <br />
        <Typography variant="h4">Progress</Typography>
        <ProgressBarDemo />
      </div>
    </div>
  );
}

export default App;
