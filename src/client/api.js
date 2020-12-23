import API_KEY from './../../.apikey.js'


const searchApi = (query) => {
  let queryUrl = '';

};


 const addToMyRecipes = (recipe) => {
   var recipeTitle = recipe.title;
  console.log(`${recipeTitle} has been added to my recipes.`)
}

//gets 10 random recipes to display on init
 const getRandomRecipes = () => {
  let randomUrl =  `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`;

  return fetch(randomUrl)
    .then(response => response.json())
    .then(results => {

      console.log(results);
      return results;
    })
};

export {searchApi , addToMyRecipes, getRandomRecipes};



