import React from 'react';

const recipeEntry = (props) => {
  //for (var ingredient of props.current.)

  return (
    <div className="entry">
      <h2 className="title" >{props.current.title}</h2>
      <p className="info"></p>
      <img className="entryImage" src={props.current.image} width="240px" height="225px"/>

    </div>
  )
};

export default recipeEntry;