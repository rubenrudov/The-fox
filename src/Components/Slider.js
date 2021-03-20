import React, { useState } from 'react';
import './slider.css'
import SlideBanner from './SlideBanner'
import first from '../Assets/first.jpg'
import second from '../Assets/second.jpg'
import bar from '../Assets/bar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


// The slider component
// Includes: Slider banners, Move right/left buttons
function Slider() {
    let sliderArray = [
        <SlideBanner imgSrc={first}/>,
        <SlideBanner imgSrc={second}/>,
        <SlideBanner imgSrc={bar}/>
    ]; 
    const [x, setX] = useState(0);

    const left = () => {
        // alert(x);
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100); 
    };

    const right = () => {
        // alert(x);
        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100); 
    };

    return(
        <div className="slider">
            {
                sliderArray.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })
            }
            
            <button id="left" onClick={left}><FontAwesomeIcon icon={faArrowLeft}/></button>
            <center className="center"><h1 className="title">The FOX <span>  , since: 2002</span></h1></center>
            <button id="right" onClick={right}><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    );
}

export default Slider;