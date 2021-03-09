import React from "react";

import AddingBooks from "./Components/addingbooks";
import Maping from "./Components/maping";

import { MyContextProvider } from "./Components/context";

function App() {
  return (
    <MyContextProvider>
      <AddingBooks />
      <ul>
        <li>
          <Maping />
        </li>
      </ul>
    </MyContextProvider>
  );
}

export default App;
