import React, { Fragment } from 'react';

const CocktailInfo = ({ infos }) => {
  const {strDrink, strDrinkThumb} = infos;
  return(
    <Fragment class="fragment">
      <center>
        <img className="img" src={strDrinkThumb} alt={strDrink}></img>
        <h2 style={{color: "white"}}>{"Cocktail name: " + strDrink}</h2>
      </center>
    </Fragment>
  )
};

export default CocktailInfo;