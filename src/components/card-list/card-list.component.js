import React from "react";
import "./card-list.styles.css";

function CardList(props) {
  console.log(props);
  const { monsters } = props;
  console.log("render CardList");
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <div className="card-container" key={id}>
            <img
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              alt={`monster ${name}`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
