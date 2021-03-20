import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CocktailInfo from './CocktailInfo';
import './randomdata.css'

class Recipes extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = { 
      randomCocktail: null,
    };
    this.fetchRandomCocktail = this.fetchRandomCocktail.bind(this);
  }

  componentDidMount() {
    this.fetchRandomCocktail();
  }
  // Fetch the data
  fetchRandomCocktail() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    axios.get(url)
      .then(response => response.data)
      .then(data => data.drinks[0])
      .then(drinkInfo => {
        this.setState({randomCocktail : drinkInfo})
      })

  }
  
  // Render the data
  render() {
        return (
          <div className="recipes">
            <br/>
            <h1>Randomize a drink: </h1>
            <Fragment className="fragment">
                <br/>
                <center><button class="random-drink" onClick={this.fetchRandomCocktail}>Another cocktail</button></center>
                <br/>
                {this.state.randomCocktail && <CocktailInfo infos= {this.state.randomCocktail} />}      
                <br/>
            </Fragment>
          </div>
        );
  }
}

export default Recipes;