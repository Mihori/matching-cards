import React from 'react';

import DeckSizeSelector from "../../Utils/Components/DeckSizeSelector";
import NewGameButton from "../../Utils/Components/NewGameButton"

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Splendex Memory Game</h1>
      <div className='rules'>
        Select a deck size of your preference, then start a new game. <br />
        Try to find all matching cards with the least tries possible! <br />
        Your best results are going to be stored for each deck size.
      </div>
      <label className='input-label'>Deck size: </label>
      <div style={{ marginBottom: '24px' }}><DeckSizeSelector /></div>
      <NewGameButton text='start new game'/>
    </div>
  )
};

export default Home;
