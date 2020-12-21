import React from 'react';

const Navbar = (props) => {
  return (
    <div id="nav">
      <div className="logo">
        THE RECIPE VAULT
      </div>
      <div >
        <span>
           <button onClick={props.showMine} className ="btn-main">My Recipes</button>
           <button onClick={props.showAll} className ="btn-main">All Recipes</button>
        </span>

      </div>
      <div >
        <form onSubmit={props.onSearch}>
          <input id="search" type="text" placeholder="Search Recipes"></input>
          <input type="submit" name="search" value="Go"/>
        </form>
        <a href="#">Add New Recipe</a>
      </div>

    </div>
  )
};

export default Navbar;