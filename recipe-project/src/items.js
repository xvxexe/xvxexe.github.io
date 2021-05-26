import React, { useState } from "react";

import "./App.css";

function Items({ title, cal, image, ingredients }) {
  const [showIngredients, setShowIngredients] = useState("false");

  const handleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div id="item">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>Calories: {cal}</p>
      <button id="showBtn" onClick={handleIngredients}>
        Show Ingredients
      </button>
      <div className="ing">
        <div id={`${showIngredients ? "list-off" : "list-on"}`}>
          <h3>Ingredients:</h3>
          {ingredients.map((ingredients) => (
            <li>{ingredients.text}</li>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
export default Items;
