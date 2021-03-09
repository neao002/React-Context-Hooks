import React, { useContext, useState } from "react";

import { UserContext } from "./ContextProvider";

function Input() {
  const MyContextState = useContext(UserContext);

  const [localState, setLocalState] = useState({
    name: "",
    comment: "",
  });

  const postData = (e) => {
    e.preventDefault();
    return MyContextState.myDispatch({
      type: "POST_DATA",
      payload: localState,
    });
  };
  return (
    <form
      className="d-flex flex-wrap w-50 justify-content-center mx-auto my-3"
      onSubmit={postData}
    >
      <input
        className="w-75"
        value={localState.name}
        placeholder="Enter your Article name"
        onChange={(e) =>
          setLocalState({
            ...localState,
            name: e.target.value,
          })
        }
      ></input>
      <input
        className="w-75 my-2"
        value={localState.comment}
        placeholder="Enter your Comment"
        onChange={(e) =>
          setLocalState({
            ...localState,
            comment: e.target.value,
          })
        }
      ></input>
      <button className="btn-primary w-75">Add Article</button>
    </form>
  );
}

export default Input;
