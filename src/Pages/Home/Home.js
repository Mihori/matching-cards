import React from 'react';

import DeckSizeSelector from "../../Utils/Components/DeckSizeSelector";
import NewGameButton from "../../Utils/Components/NewGameButton"

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Splendex Memory Game</h1>
      <label className='input-label'>Deck size: </label>
      <div style={{ marginBottom: '24px' }}><DeckSizeSelector /></div>
      <NewGameButton text='start new game'/>
    </div>
  )
};

export default Home;
