import React, { useState, useContext } from "react";
import { MyContext } from "./context";

const Addingbookss = () => {
  const { myComments } = useContext(MyContext);

  const [myBooks, setBooksState] = useState({ books: "", comments: "" });

  const checkUpdate = (e) => {
    setBooksState({
      ...myBooks,
      [e.target.name]: e.target.value,
    });
  };
  const addBooks = (e) => {
    e.preventDefault();
    myComments({ type: "add_books", payload: myBooks });
  };
  return (
    <div>
      <form
        className="d-flex flex-wrap w-50 justify-content-center mx-auto my-3"
        onSubmit={addBooks}
      >
        <input
          onChange={checkUpdate}
          placeholder="Enter your Book Name"
          type="text"
          name="books"
        />
        <input
          onChange={checkUpdate}
          type="text"
          name="comments"
          placeholder="Enter your Comments"
        />
        <button>Add Your Items</button>
      </form>
    </div>
  );
};

export default Addingbookss;
