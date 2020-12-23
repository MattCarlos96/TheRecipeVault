import React from 'react';
import Rodal from 'rodal';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  preventEvent(event) {
    event.preventDefault();
  }


  render() {
    return (
    <div id="nav">
      <div className="logo">
        THE RECIPE VAULT
      </div>
      <div >
        <span>
           <button onClick={this.props.showMine} className ="btn-main">My Recipes</button>
           <button onClick={this.props.showAll} className ="btn-main">All Recipes</button>
        </span>

      </div>
      <div >
        <form onSubmit={this.props.preventDefault}>
          <input autoComplete="off" onChange={this.props.search} id="search" type="text" placeholder="Search Recipes"></input>
          <input  type="submit" name="search" value="Go"/>
        </form>
        <Rodal height={600} width={700} visible={this.state.visible} onClose={this.hide.bind(this)}>
          <div>
            <form onSubmit={this.preventEvent.bind(this)}>
              <label htmlFor="recipeName">Recipe Name:</label>
              <input type="text" id="recipeName"></input><br></br>
              <label htmlFor="recipeIngredients">Recipe Ingredients:</label>
              <input type="text"  id="recipeIngredients"></input><br></br>
              <label htmlFor="recipeServings">Number of Servings:</label>
              <input type="text"  id="recipeServings"></input><br></br>
              <label htmlFor="recipeDirections">Directions:</label>
              <input id="recipeDirections"></input><br></br>
              <input type="submit"></input>
            </form>
          </div>
        </Rodal>
        <a onClick={this.show.bind(this)} href="#">Add New Recipe</a>
      </div>

    </div>
  )
  }

};

export default Navbar;