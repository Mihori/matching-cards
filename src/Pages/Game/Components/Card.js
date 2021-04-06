import React, {useState} from 'react';

import angular from '../Images/angular.png'
import d3 from '../Images/d3.png'
import jenkins from '../Images/jenkins.png'
import postcss from '../Images/postcss.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import sass from '../Images/sass.png'
import ts from '../Images/ts.png'
import webpack from '../Images/webpack.png'

const imageMap = {
    angular,
    d3,
    jenkins,
    postcss,
    react,
    redux,
    sass,
    ts,
    webpack
}

const Card = ({ value }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    return (
        <div className='card' onClick={() => setIsRevealed(!isRevealed)}>
            {isRevealed && <img className='card-image' src={imageMap[value]} alt={value} />}
        </div>
    )
  };
  
  export default Card;
  