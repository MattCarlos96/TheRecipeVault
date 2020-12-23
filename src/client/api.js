import API_KEY from './../../.apikey.js'

const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=`;
const searchApi = (query) => {
  let url2 = '&addRecipeInformation=true&fillIngredients=true'
  let newQuery = searchUrl + query + url2;

  return fetch(newQuery)
    .then(response => response.json())
    .then(results => {
      console.log(results);
      return results.results;
    })

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
      return results.recipes;
    })
};

export {searchApi , addToMyRecipes, getRandomRecipes};



