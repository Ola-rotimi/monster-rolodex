import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [details, setDetails] = useState({
    monsters: [],
  });
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setDetails({ monsters: users }))
      .catch((error) => error);
  }, []);

  const filteredMonsters = useMemo(
    () =>
      details.monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      ),
    [details.monsters, searchField]
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox 
        className="search-box"
        placeholder="search monsters"
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
