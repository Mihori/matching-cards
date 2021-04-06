import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import DeckSizeSelector from '../Utils/DeckSizeSelector';
import NewGameButton from '../Utils/NewGameButton';
import logo from './Images/logo.svg';

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname)
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
          <NewGameButton />
        </div>
      }
    </nav>
  );
};

export default NavBar;
