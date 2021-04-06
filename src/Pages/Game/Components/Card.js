import React from 'react';

import angular from '../Images/angular.png'
import d3 from '../Images/d3.png'
import jenkins from '../Images/jenkins.png'
import postcss from '../Images/postcss.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import sass from '../Images/sass.png'
import splendex from '../Images/splendex.png'
import ts from '../Images/ts.png'
import webpack from '../Images/webpack.png'

const imageMap = {
  angular,
  d3,
  jenkins,
  postcss,
  react,
  redux,
  splendex,
  sass,
  ts,
  webpack
}

const Card = ({ value, index, cardClick, revealedCardIndices, revealedCardTypes, onRevealedCardIndicesChange, onCardClick }) => {
  const isInRevealedCardIndices = revealedCardIndices?.some(revealedIndex => revealedIndex === index);
  const isInRevealedCardTypes = revealedCardTypes?.some(revealedCardType => revealedCardType === value);
  const isRevealed = isInRevealedCardIndices || isInRevealedCardTypes;

  function setRevealed() {
    onCardClick();
    if (cardClick % 3 === 0) {
      onRevealedCardIndicesChange([]);
    } else {
      onRevealedCardIndicesChange([...revealedCardIndices, index])
    }
  }
  return (
    <div className='card' key={index} onClick={() => setRevealed()}>
      {isRevealed && <img className='card-image' src={imageMap[value]} alt={value} />}
    </div>
  )
};

export default Card;
