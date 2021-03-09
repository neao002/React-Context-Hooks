import React from "react";

function books({ books, myComments }) {
  return (
    <div>
      <p>{books}</p>
      <p>{myComments}</p>
    </div>
  );
}

export default books;
