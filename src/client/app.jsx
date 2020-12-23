import React from 'react';
import Navbar from './components/navbar.jsx';
import {getRandomRecipes, searchApi} from './api.js';
import RecipeList from './components/recipeList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAll: false,
      query: '',
      userRecipes: [],
      allRecipes: []
    }
  }

  onSearchEventHandle(e) {
    e.preventDefault()
  }

  onSearchChange() {
    let query = document.getElementById('search').value;
    if (this.state.showAll === true) {
      searchApi(query)
        .then(results => {
          this.setState({
            allRecipes: results
          })
        })
    } else {
      console.log('tits')
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
        <Navbar preventDefault={this.onSearchEventHandle.bind(this)} search={this.onSearchChange.bind(this)} showAll={this.showAllHandler.bind(this)} showMine={this.showMineHandler.bind(this)} />
        <RecipeList recipes={this.state.allRecipes}/>
      </div>
    )
    :
    (
      <div className="app">
        <Navbar preventDefault={this.onSearchEventHandle.bind(this)}  search={this.onSearchChange.bind(this)} showAll={this.showAllHandler.bind(this)} showMine={this.showMineHandler.bind(this)}  />
        <RecipeList recipes={this.state.userRecipes}/>
      </div>
    )
  }
}

export default App;