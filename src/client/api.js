import API_KEY from './../../.apikey.js'


const searchApi = (query) => {
  let queryUrl = '';

};

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

export default getRandomRecipes;

