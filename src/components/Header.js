import React from "react";
const Header = props => {
  const { search, onInputChange,onSetLabel, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        Food-Recipe App
      </h1>
      <div className="input-group w-50 mx-auto d-flex ">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="dropdown s">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Health-label
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => onSetLabel("vegetarian")}>vegetarian</li>
            <li className="dropdown-item" onClick={() => onSetLabel("vegan")}>Vegan</li>
            <li className="dropdown-item" onClick={() => onSetLabel("balanced-diet")}>balanced-diet</li>
            <li className="dropdown-item" onClick={() => onSetLabel("paleo")}>paleo</li>
            <li className="dropdown-item" onClick={() => onSetLabel("diary-free")}>diary-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("gluten-free")}>gluten-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("wheat-free")}>wheat-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("low-sugar")}>low-sugar</li>
            <li className="dropdown-item" onClick={() => onSetLabel("egg-free")}>egg-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("peanut-free")}>peanut-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("tree-nut-free")}>tree-nut-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("soy-free")}>soy-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("fish-free")}>fish-free</li>
            <li className="dropdown-item" onClick={() => onSetLabel("shellfish-free")}>shellfish-free</li>
          </ul>
        </div>
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
