import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { SpRadio, SpRadioGroup } from "./components/SpRadio";
// import { SpTabs, SpTab, SpTabPanel } from "./components/SpTabs";
import { SpTheme } from "./components/Theme";

function App() {
  return (
    <SpTheme scale="medium" theme="spectrum" color="light">
      <div className="App">
        <SpRadioGroup selected="first" name="example">
          <SpRadio value="first">Option 1</SpRadio>
          <SpRadio value="second">Option 2</SpRadio>
          <SpRadio value="third">Option 3</SpRadio>
          <SpRadio value="fourth">Option 4</SpRadio>
        </SpRadioGroup>
        {/* <SpTabs selected="4" size="m">
          <SpTab label="Tab 1" value="1"></SpTab>
          <SpTab label="Tab 2" value="2"></SpTab>
          <SpTab label="Tab 3" value="3"></SpTab>
          <SpTab label="Tab 4" value="4"></SpTab>
          <SpTabPanel value="1">Content for Tab 1</SpTabPanel>
          <SpTabPanel value="2">Content for Tab 2</SpTabPanel>
          <SpTabPanel value="3">Content for Tab 3</SpTabPanel>
          <SpTabPanel value="4">Content for Tab 4</SpTabPanel>
        </SpTabs> */}
      </div>
    </SpTheme>
  );
}

export default App;
