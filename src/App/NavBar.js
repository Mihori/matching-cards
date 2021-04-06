import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './Images/logo.svg';

const NavBar = () => {

  return (
    <nav className='nav-bar'>
      <NavLink to='/'>
        <img className='nav-logo' src={logo} alt='' />
      </NavLink>
        <div className='nav-items'>
          <label className='input-label'>Deck size: </label>
          <select className='input' name='subject' onChange={(event) => console.log(event.target.value)}>
            {[3,4,5,6,7,8,9,10].map((number, index) => <option key={index}>{number}</option>)}
          </select>
          <NavLink
            className='new-game-button'
            to={{ pathname: '/game'}}
          >
            New Game
          </NavLink>
        </div>
    </nav>
  );
};

export default NavBar;
