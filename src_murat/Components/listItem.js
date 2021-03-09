import React, { useContext } from "react";
import { UserContext } from "./ContextProvider";
function ListItem(props) {
  const myUserContextState = useContext(UserContext);

  const deleteArticle = () => {
    return myUserContextState.myDispatch({
      type: "DELETE_ARTICLE",
      payload: props.id,
    });
  };
  return (
    <div
      className="px-3 py-1 w-50 mx-auto my-2 d-flex justify-content-between align-items-center"
      style={{ borderBottom: "1px solid grey" }}
    >
      <div>
        <h2>
          {props.number}- {props.name}
        </h2>
        <p>{props.comment}</p>
      </div>

      <button onClick={deleteArticle} className="btn-danger">
        Delete
      </button>
    </div>
  );
}

export default ListItem;
