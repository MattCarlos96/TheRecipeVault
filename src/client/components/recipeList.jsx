import React from 'react';
import RecipeEntry from './recipeEntry.jsx'
import {addToMyRecipes} from '../api.js'

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',

    }
  }

  onAddHandler(e) {
    //console.log(this)
    let recipe = Object.assign(this)
    //console.log(recipe)
    addToMyRecipes(recipe);
  }

  render() {
    if (!this.props.recipes) {
      return (
        <div>
          Loading...
        </div>

      )
    } else if (this.props.recipes.length > 0) {
          return (
            <div className="list">

            {this.props.recipes.map((recipe) =>
              <RecipeEntry add={this.onAddHandler.bind(recipe)} current={recipe}/>
            )}
          </div>
          )
    } else {
      return (
        <h2 className="emptyList" >
          No Recipes To Display
        </h2>
      )
    }



    // return this.props.recipes.length > 0 ? (
    //   <div className="list">

    //     {this.props.recipes.map((recipe) =>
    //       <RecipeEntry add={this.addToMyRecipes.bind(this)} current={recipe}/>
    //     )}
    //   </div>
    // )
    // :
    // (
    //   <h2 className="emptyList" >
    //     No Recipes To Display
    //   </h2>
    // )
  }
}

export default RecipeList;