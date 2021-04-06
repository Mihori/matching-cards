import React from 'react';
import { NavLink } from 'react-router-dom';

const NewGameButton = () => {
  return (
    <NavLink
      className='new-game-button'
      to={{ pathname: '/game' }}
    >
      Start New Game
    </NavLink>
  )
};

export default NewGameButton;
