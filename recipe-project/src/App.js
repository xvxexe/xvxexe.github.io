import React, { useState, useEffect } from "react";
import "./App.css";
import Items from "./items";

function App() {
  const APP_ID = "ba377b51";
  const APP_KEY = "f9238af8c5cf3b317ccdc526d65af8fd";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [btnclick, setBtnclick] = useState("");

  useEffect(() => {
    getData();
  }, [btnclick]);

  async function getData() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${btnclick}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  function updateSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function getSearch(e) {
    e.preventDefault();
    setBtnclick(search);
    setSearch("");
  }

  return (
    <div className="container">
      <form onSubmit={getSearch}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit">Search</button>
      </form>
      <div className="item-container">
        {recipes.map((item) => (
          <Items
            key={item.recipe.label}
            title={item.recipe.label}
            cal={item.recipe.calories}
            image={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
