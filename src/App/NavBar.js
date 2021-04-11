import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import DeckSizeSelector from '../Utils/Components/DeckSizeSelector';
import NewGameButton from '../Utils/Components/NewGameButton';
import logo from './Images/logo.svg';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='nav-bar'>
      <NavLink to='/'>
        <img className='nav-logo' src={logo} alt='' />
      </NavLink>
      {
        location.pathname === '/game' &&
        <div className='nav-items'>
          <label className='input-label'>Deck size: </label>
          <DeckSizeSelector />
          <NewGameButton text='start new game'/>
        </div>
      }
    </nav>
  );
};

export default NavBar;
