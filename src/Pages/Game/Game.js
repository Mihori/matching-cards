import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GameInfo from './GameInfo';
import Card from './Components/Card'
import { setTryCount, setBestResult, setRevealedCardIndices, setSolvedCards } from '../../App/appStore';

const Game = () => {
  const dispatch = useDispatch();

  const deckSize = useSelector(state => state.deckSize);
  const tryCount = useSelector(state => state.tryCount);
  const bestResult = useSelector(state => state.bestResult);
  const cards = useSelector(state => state.cards);
  const revealedCardIndices = useSelector(state => state.revealedCardIndices);
  const solvedCards = useSelector(state => state.solvedCards);

  const isGameEnded = solvedCards.length === cards.length / 2;
  const isBestResult = bestResult[deckSize];
  const isBestResultWorseThanTryCount = isBestResult && bestResult[deckSize] > tryCount;

  useEffect(() => {
    window.localStorage.setItem('memoryGameState', JSON.stringify({
      deckSize,
      tryCount,
      bestResult,
      cards,
      revealedCardIndices,
      solvedCards
    }));
    // eslint-disable-next-line
  }, [tryCount]);

  useEffect(() => {
    if (revealedCardIndices.length > 0 && cards[revealedCardIndices[0]] === cards[revealedCardIndices[1]]) {
      dispatch(setSolvedCards([...solvedCards, cards[revealedCardIndices[0]]]));
    }
    // eslint-disable-next-line
  }, [revealedCardIndices]);

  useEffect(() => {
    if (isGameEnded && (!isBestResult || isBestResultWorseThanTryCount)) {
      const newBestResult = {...bestResult, [deckSize]: tryCount}
      dispatch(setBestResult(newBestResult))
    };
    // eslint-disable-next-line
  }, [solvedCards]);

  return (
    <>
        <GameInfo tryCount={tryCount} bestResult={bestResult[deckSize]}/>
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
    </>
  )
};

export default Game;
