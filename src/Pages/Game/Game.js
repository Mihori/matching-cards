import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GameInfo from './GameInfo';
import Card from './Components/Card'
import { setCardClick, setRevealedCardIndices } from '../../App/appStore';

const Game = () => {
  const dispatch = useDispatch();

  const cards = useSelector(state => state.cards);
  const cardClick = useSelector(state => state.cardClick);
  const revealedCardIndices = useSelector(state => state.revealedCardIndices);
  const revealedCardTypes = useSelector(state => state.revealedCardTypes);
  const currentTries = useSelector(state => state.currentTries);
  const leastFailuresRecord = useSelector(state => state.leastFailuresRecord);

  return (
    <div className='game-container'>
        <GameInfo currentTries={currentTries} leastFailuresRecord={leastFailuresRecord}/>
        <div className='cards'>
          {
            cards && cards.length > 0 && cards.map((card, index) => (
            <Card
              value={card}
              index={index}
              cardClick={cardClick}
              revealedCardIndices={revealedCardIndices}
              revealedCardTypes={revealedCardTypes}
              onRevealedCardIndicesChange = {(newValue) => dispatch(setRevealedCardIndices(newValue))}
              onCardClick = {(newValue) => dispatch(setCardClick(cardClick + 1))}
              />
            ))
          }
      </div>
    </div>
  )
};

export default Game;
