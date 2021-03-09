import React, { useReducer } from "react";

export const MyContext = React.createContext();

const reducer = (books, action) => {
  switch (action.type) {
    case "add_books":
      return [
        ...books,
        {
          books: action.payload.books,
          comments: action.payload.comments,
        },
      ];
    default:
      return books;
  }
};

const MyFirstState = [{ books: "", comments: "" }];

export const MyContextProvider = (props) => {
  const [books, myComments] = useReducer(reducer, MyFirstState);
  return (
    <MyContext.Provider value={{ books, myComments }}>
      {props.children}
    </MyContext.Provider>
  );
};
