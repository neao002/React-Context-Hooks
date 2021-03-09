import React, { useReducer } from "react";

export const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "POST_DATA":
      return {
        ...state,
        myArticles: [
          ...state.myArticles,
          {
            id: Math.floor(Math.random() * 1000) + state.myArticles.length,
            name: action.payload.name,
            comment: action.payload.comment,
          },
        ],
      };
    case "DELETE_ARTICLE":
      const deleteIndex = state.myArticles.findIndex((item) => {
        return item.id == action.payload;
      });
      const newArticles = [...state.myArticles];
      newArticles.splice(deleteIndex, 1);
      return {
        ...state,
        myArticles: newArticles,
      };
    default:
      return state;
  }
};

const initialState = {
  myArticles: [{ id: "", name: "", comment: "" }],
};

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ myState: state, myDispatch: dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default ContextProvider;
