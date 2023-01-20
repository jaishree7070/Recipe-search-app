import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [label, setLabel] = useState("vegetarian");
  const APP_ID = "af3521ba";
  const APP_KEY = "fe050e045387f4d2c61cab6abac8380e";
  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${label}`
    );
    setRecipes(res.data.hits);
  };
  const onInputChange = e => {
    setSearch(e.target.value);
  };
  const onSetLabel = (label) => {
    setLabel(label)
  }
  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
        onSetLabel={onSetLabel}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}
export default App;