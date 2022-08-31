import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { SpRadio, SpRadioGroup } from './components/SpRadio';
import { SpTheme } from './components/Theme';

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
      </div>
    </SpTheme>
  );
}

export default App;
