import './App.css';
import { faGithub, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from './Components/Contact'
import Top from './Components/Top'
import MenuItem from './Components/MenuItem'
import Recipes from './Components/Recipes'

// Project ID: emailjs: hazaken_project_id

function App() {

  // Hooks using:

  const menuCocktails = [
    "mojito",
    "dry martini",
    "old fashioned"
  ];  


  return (
    <div className="App">
      <Top/>
      <Recipes/>
      <div className="items">
        <h1>Our home drinks:</h1>
        <br/>
        <div className="items-inner">
          {menuCocktails.map(cocktail => {
            return <MenuItem name={cocktail}/>
          })}
        </div>
      </div>
      <Contact/>
      <footer className="footer">
        <center>
          <a href="https://github.com/rubenrudov"><FontAwesomeIcon className="footer-fa-icon" icon={faGithub} color={"white"} /></a>
          <a href="https://www.instagram.com/rudovruben"><FontAwesomeIcon className="footer-fa-icon" icon={faInstagram} color={"white"} /></a>
          <a href="https://www.linkedin.com/in/ruben-rudov-106a22204/"><FontAwesomeIcon className="footer-fa-icon" icon={faLinkedin} color={"white"} /></a>
          <a href="mailto:adamruben.softwares@gmail.com"><FontAwesomeIcon className="footer-fa-icon" icon={faGoogle} color={"white"}/></a>
          <p>© Ruben Rudov 2021</p>
        </center>
      </footer>
    </div>
  );
}

export default App;
