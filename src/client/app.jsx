import React from 'react';
import Navbar from './components/navbar.jsx';
import getRandomRecipes from './api.js';
import RecipeList from './components/recipeList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAll: false,
      userRecipes: [],
      allRecipes: []
    }
  }

  componentDidMount() {
    debugger;
    getRandomRecipes().then(result => {
      this.setState({
        allRecipes: result
      })
    });


  };

  showAllHandler() {
    this.setState({
      showAll: true
    })
  };

  showMineHandler() {
    this.setState({
      showAll: false
    })
  };

  render() {
    // return (
    //   <div className="app">
    //      <Navbar  />
    //      <RecipeList recipes={this.state.allRecipes}/>
    //    </div>
    // )
    return this.state.showAll === true ? (

      <div className="app">
        <Navbar showAll={this.showAllHandler.bind(this)} showMine={this.showMineHandler.bind(this)} />
        <RecipeList recipes={this.state.allRecipes.recipes}/>
      </div>
    )
    :
    (
      <div className="app">
        <Navbar  showAll={this.showAllHandler.bind(this)} showMine={this.showMineHandler.bind(this)}  />
        <RecipeList recipes={this.state.userRecipes}/>
      </div>
    )
  }
}

export default App;