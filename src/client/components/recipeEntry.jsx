import React from 'react';

const recipeEntry = (props) => {

  return (
    <div className="entry">
      <h3>{props.current.title}</h3>
      <img className="entryImage" src={props.current.image} width="220px" height="180px"/>

    </div>
  )
};

export default recipeEntry;