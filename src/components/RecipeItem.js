import React from "react";
const RecipeItem = props => {
  const { name, image, ingredientLines, url } = props;
  console.log(ingredientLines);
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul class="list-group list-group-flush">
            {ingredientLines.map(ingredient => (
              <li className="list-group-item card-text">{ingredient}</li>
            ))}
            <a href={url} className="card-text">click to view the detailed recipe</a>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default RecipeItem;
