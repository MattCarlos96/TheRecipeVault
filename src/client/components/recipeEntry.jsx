import React from 'react';

const recipeEntry = (props) => {
  let ingredientList = []
  for (var ingredient of props.current.extendedIngredients) {
    ingredientList.push(ingredient.name)
  }
  let ingredients = ingredientList.join(', ')

  return (
    <div className="entry">
      <h2 className="title" >{props.current.title}</h2>
      <p className="info">Ingredients: {ingredients}</p>
      <img className="entryImage" src={props.current.image} width="240px" height="225px"/>
      <button onClick={props.add.bind(this)} className="addToMyRecipes" value={props.current.id}>Add To My Recipes</button>

    </div>
  )
};

export default recipeEntry;