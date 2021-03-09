import React, { useContext } from "react";
import { MyContext } from "./context";
import Books from "./books";

function MyBooks() {
  const { books } = useContext(MyContext);
  return (
    <div>
      {books.map((item) => {
        return <Books books={item.books} myComments={item.comments} />;
      })}
    </div>
  );
}

export default MyBooks;
