import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setTryCount, setCards, setRevealedCardIndices, setSolvedCards } from '../../App/appStore';

const cardTypeValues = [
  'angular',
  'd3',
  'jenkins',
  'postcss',
  'react',
  'redux',
  'splendex',
  'sass',
  'ts',
  'webpack'
]


const NewGameButton = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector(state => state.deckSize);
  
  function startNewGame() {
    const cardTypes = cardTypeValues.slice(0, deckSize / 2);
    const cards = cardTypes.concat(cardTypes);
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    dispatch(setCards(shuffledCards));
    dispatch(setTryCount(0));
    dispatch(setRevealedCardIndices([]));
    dispatch(setSolvedCards([]));
  }

  return (
    <NavLink
      className='new-game-button'
      to={{ pathname: '/game' }}
      onClick={() => startNewGame()}
    >
      Start New Game
    </NavLink>
  )
};

export default NewGameButton;
