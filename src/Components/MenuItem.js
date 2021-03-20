import React, { useEffect, useState } from 'react';
import axios from 'axios';


function MenuItem({ name }) {
    const [drinkInfoState, setDrinkInfoState] = useState({});

    useEffect(() => { 
            const getCocktailData = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
            axios.get(url)
              .then(response => response.data)
              .then(data => data.drinks[0])
              .then(drinkInfo => {
                  console.log(drinkInfo);
                  setDrinkInfoState(drinkInfo);
              }
            )
        }
        getCocktailData();
    }, [])
    
    return(
        <div className="menu-item">
            <h2>{drinkInfoState.strDrink}</h2>
            <p>{drinkInfoState.strInstructions}</p>
            <img src={drinkInfoState.strDrinkThumb}/>
        </div>
    );
}

export default MenuItem;