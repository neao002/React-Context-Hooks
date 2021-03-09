import React, { useContext } from "react";

import { UserContext } from "./ContextProvider";

function Header() {
  const MyContextState = useContext(UserContext);
  return (
    <div className="bg-danger text-center w-50 mx-auto text-white py-3">
      <h1>Nico </h1>
      <h2>List of my articles {MyContextState.myState.myArticles.length}</h2>
    </div>
  );
}

export default Header;
