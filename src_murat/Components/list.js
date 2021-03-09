import React, { useContext } from "react";
import { UserContext } from "./ContextProvider";
import ListItem from "./listItem";
function List() {
  const myUserContextState = useContext(UserContext);
  return (
    <div>
      {myUserContextState.myState.myArticles.map((article, index) => {
        return (
          <ListItem
            id={article.id}
            number={index + 1}
            key={article.id}
            name={article.name}
            comment={article.comment}
          ></ListItem>
        );
      })}
    </div>
  );
}

export default List;
