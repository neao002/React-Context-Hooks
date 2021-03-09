import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import ContextProvider from "./Components/ContextProvider";
//! Components
import Input from "./Components/input";
import List from "./Components/list";
import Header from "./Components/header";
function App() {
  return (
    <ContextProvider>
      <div>
        <Header></Header>
        <Input></Input>
        <List></List>
      </div>
    </ContextProvider>
  );
}

export default App;
