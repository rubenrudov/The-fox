import React from 'react'

function SlideBanner({ imgSrc }) {
    let styles = {
        width: 100 + "%",
        height: "auto"
    };

    return(
        <img src={imgSrc} alt="slide-banner" style={styles}/>
    );
}

export default SlideBanner;