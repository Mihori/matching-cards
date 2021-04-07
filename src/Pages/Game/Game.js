import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GameInfo from './GameInfo';
import Card from './Components/Card'
import { setTryCount, setBestResult, setRevealedCardIndices, setSolvedCards } from '../../App/appStore';

const Game = () => {
  const dispatch = useDispatch();

  const cards = useSelector(state => state.cards);
  const tryCount = useSelector(state => state.tryCount);
  const revealedCardIndices = useSelector(state => state.revealedCardIndices);
  const solvedCards = useSelector(state => state.solvedCards);
  const bestResult = useSelector(state => state.bestResult);

  const isGameEnded = solvedCards.length === cards.length / 2;

  useEffect(() => {
    if (revealedCardIndices.length > 0 && cards[revealedCardIndices[0]] === cards[revealedCardIndices[1]]) {
      dispatch(setSolvedCards([...solvedCards, cards[revealedCardIndices[0]]]));
    }
    // eslint-disable-next-line
  }, [revealedCardIndices]);

  useEffect(() => {
    if (isGameEnded && (!bestResult || (bestResult && bestResult > tryCount))) dispatch(setBestResult(tryCount));
    // eslint-disable-next-line
  }, [solvedCards]);

  return (
    <div className='game-container'>
        <GameInfo tryCount={tryCount} bestResult={bestResult}/>
        <div className='cards'>
          {
            cards && cards.length > 0 && cards.map((card, index) => (
            <Card
              value={card}
              index={index}
              tryCount={tryCount}
              onTryCountChange = {() => isGameEnded ? null : dispatch(setTryCount(tryCount + 1))}
              revealedCardIndices={revealedCardIndices}
              onRevealedCardIndicesChange = {(newValue) => dispatch(setRevealedCardIndices(newValue))}
              isRevealed={revealedCardIndices?.some(revealedIndex => revealedIndex === index) || solvedCards?.some(solvedCard => solvedCard === card)}
              />
            ))
          }
      </div>
    </div>
  )
};

export default Game;
