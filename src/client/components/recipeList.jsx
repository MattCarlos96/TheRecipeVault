import React from 'react';
import RecipeEntry from './recipeEntry.jsx'

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',

    }
  }


  onSearchChange() {
    debugger;
    let searchTerm = document.getElementById('search').value;
    this.setState({
      query: searchTerm
    })
  }

  onSearchHandler(event) {
    event.preventDefault();
  }

  render() {
    return this.props.recipes.length > 0 ? (
      <div className="list">

        {this.props.recipes.map((recipe) =>
          <RecipeEntry current={recipe}/>
        )}
      </div>
    )
    :
    (
      <div className="list">
        No Recipes To Display
      </div>
    )
  }
}

export default RecipeList;