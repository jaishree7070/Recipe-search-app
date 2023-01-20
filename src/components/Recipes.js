import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
    const { recipes } = props;
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 p-3 ">
                {recipes===[]?
                <p>Try for new recipe</p> 
                :
                (recipes.map(recipe => (
                    <RecipeItem
                        key={Math.random() * 100}
                        name={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredientLines={recipe.recipe.ingredientLines}
                        url={recipe.recipe.url}
                    />
                )))}
            </div>
        </div>

    );
};

export default Recipes;