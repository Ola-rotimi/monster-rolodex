import React from "react";

function CardList(props) {
    console.log(props)
    const { monsters } = props;
    console.log('render CardList');
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default CardList;
