import React from "react";
import "./App.css";
import Parent from "./Parent";

function App() {
  return (
    <div className="App" style={{ backgroundColor: color }}>
        <Child onChangeColor={handleChangeColor} />
    <Child onChangeColor={handleChangeColor} />
      <Parent />
    </div>
  );
}

export default App;
